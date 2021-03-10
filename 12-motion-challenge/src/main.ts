import { MotionBlock } from "./components/block.js";
import {
  BlockMaker,
  ImageBlockMaker,
  NoteBlockMaker,
  TaskBlockMaker,
  VideoBlockMaker,
} from "./components/blockMakers.js";
import * as Header from "./components/header.js";
import { selectAllBlocks } from "./utils/db.js";

interface PageImpl {
  addBlock: (block: MotionBlock, maker: BlockMaker) => void;
}

export class Page implements PageImpl {
  private bodyContent: Element | null;
  private blocks: MotionBlock[] = [];
  constructor(private makers: BlockMaker[]) {
    this.bodyContent = document.querySelector("#body-content");

    this.init();
  }

  init() {
    if (!this.bodyContent) {
      throw new Error("#body content element is not exist.");
    }
    const blocks = selectAllBlocks();
    console.log(blocks);
    blocks.map((block) => {
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

          this.bodyContent?.appendChild(new MotionBlock().create(maker));
        }
      });
    });
  }

  addBlock(block: MotionBlock, maker: BlockMaker) {
    if (!this.bodyContent) {
      throw new Error("#body content element is not exist.");
    }

    this.blocks.push(block);
    this.bodyContent.appendChild(block.create(maker));
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
