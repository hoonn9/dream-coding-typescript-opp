import { BlockData, BlockType } from "src/utils/db.js";
import { BlockMaker } from "./blockMakers.js";

const HEADER_HEIGHT = 150;
const BLOCK_HEIGHT = 150;

interface MotionBlockImpl {
  create(blockMaker: BlockMaker, changeSeqBlock: (id: number, targetId: number) => void, index: number): HTMLDivElement;
}

export class MotionBlock implements MotionBlockImpl {
  constructor() {}

  create(blockMaker: BlockMaker, changeSeqBlock: (id: number, targetId: number) => void, index: number) {
    const wrapper = document.createElement("div");
    wrapper.style.position = "relative";
    wrapper.style.display = "flex";
    wrapper.style.height = `${BLOCK_HEIGHT}px`;
    wrapper.addEventListener("dragstart", (event) => {
      console.log("start", event);
      const currentIndex = Math.floor((event.pageY - HEADER_HEIGHT) / BLOCK_HEIGHT);
      console.log("startIndex", currentIndex);
    });

    wrapper.addEventListener("dragend", (event) => {
      console.log("end", event);
      const currentIndex = Math.floor((event.pageY - HEADER_HEIGHT) / BLOCK_HEIGHT);
      console.log("endIndex", currentIndex);
      changeSeqBlock(index, currentIndex);
    });

    // blockMaker.save(index);

    const block = blockMaker.block();
    wrapper.appendChild(block);
    wrapper.appendChild(this.createRemoveButton());

    return wrapper;
  }

  private createRemoveButton() {
    const button = document.createElement("button");
    button.innerText = "✖";
    button.style.color = "#FFF";
    button.style.position = "absolute";
    button.style.right = "8px";
    button.style.top = "8px";

    return button;
  }
}
