import { MotionBlock } from "./components/block.js";
import {
  BlockMaker,
  ImageBlockMaker,
  NoteBlockMaker,
  TaskBlockMaker,
  VideoBlockMaker,
} from "./components/blockMakers.js";
import * as Header from "./components/header.js";
import { BlockData, BlockType, selectAllBlocks } from "./utils/db.js";

interface PageImpl {
  addBlock: (block: MotionBlock, maker: BlockMaker) => void;
}

export class Page implements PageImpl {
  private bodyContent: Element | null;
  private blocks: BlockData<BlockType>[] = [];
  constructor(private makers: BlockMaker[]) {
    this.bodyContent = document.querySelector("#body-content");

    this.init();
  }

  init() {
    if (!this.bodyContent) {
      throw new Error("#body content element is not exist.");
    }
    const blocks = selectAllBlocks();
    this.blocks = blocks;

    this.updateRender(blocks);

    console.log("block", this.blocks);
  }

  updateRender(blocks: BlockData<BlockType>[]) {
    if (this.bodyContent) {
      this.bodyContent.innerHTML = "";
    }
    blocks.forEach((block, index) => {
      this.makers.forEach((maker) => {
        if (maker.NAME === block.block.blockType) {
          switch (block.block.type) {
            case "url":
              maker.inputs[0].value = block.block.title;
              maker.inputs[1].value = block.block.url;
              break;
            case "body":
              maker.inputs[0].value = block.block.title;
              maker.inputs[1].value = block.block.body;
            default:
              break;
          }
          const readBlock = new MotionBlock();
          this.bodyContent?.appendChild(readBlock.create(maker, this.changeSeqBlock.bind(this), index));
        }
      });
    });
  }

  addBlock(block: MotionBlock, maker: BlockMaker) {
    if (!this.bodyContent) {
      throw new Error("#body content element is not exist.");
    }

    this.blocks.push(maker.save(this.blocks.length));
    this.bodyContent.appendChild(block.create(maker, this.changeSeqBlock.bind(this), this.blocks.length));
  }

  changeSeqBlock(id: number, targetId: number) {
    //this context 문제 arrow function 또는 bind 로 해결
    console.log(id, targetId);
    console.log(this.blocks);
    let blocks = [...this.blocks];
    if (targetId < 0) {
      const moveBlock = blocks.splice(id, 1)[0];
      console.log("before removed ", blocks);
      console.log("moveBlock", moveBlock);
      blocks = [moveBlock, ...blocks];
    } else {
      const temp = blocks[targetId];
      blocks[targetId] = blocks[id];
      blocks[id] = temp;
    }
    console.log("changed", blocks);

    this.blocks = blocks;
    this.updateRender(blocks);
  }
}

class App {
  constructor() {}

  run() {
    const makers = [new ImageBlockMaker(), new VideoBlockMaker(), new NoteBlockMaker(), new TaskBlockMaker()];
    const page = new Page(makers);
    Header.createHeader(page, makers);
  }
}

new App().run();
