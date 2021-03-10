import { BlockMaker } from "./blockMakers.js";

interface MotionBlockImpl {
  create(blockMaker: BlockMaker): HTMLDivElement;
}

export class MotionBlock implements MotionBlockImpl {
  constructor() {}

  create(blockMaker: BlockMaker) {
    const wrapper = document.createElement("div");
    wrapper.style.position = "relative";
    wrapper.style.display = "flex";

    wrapper.addEventListener("dragstart", (event) => {
      console.log(event);
    });

    wrapper.appendChild(blockMaker.block());
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
