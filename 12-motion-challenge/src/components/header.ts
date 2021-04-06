import { Form } from "./form.js";
import { Input } from "./input.js";
import { Modal } from "./modal.js";
import { BlockMaker, VideoBlockMaker } from "./blockMakers.js";
import { MotionBlock } from "./block.js";
import { Page } from "src/main.js";

const header = document.querySelector("#header-wrapper");
const headerTabs = document.querySelectorAll(".header-menu-button");

type HeaderTabName = "image" | "video" | "note" | "task";

interface HeaderTabImpl {
  onClick(): void;
}

class HeaderTab implements HeaderTabImpl {
  constructor(private motionBlock: MotionBlock, private blockMaker: BlockMaker, private page: Page) {}

  onClick() {
    const newForm = new Form(this.blockMaker.inputs);
    const modal = new Modal(newForm.form, () => {
      console.log("onCLick");
      this.page.addBlock(this.motionBlock, this.blockMaker);
      this.blockMaker.inputs.forEach((input) => {
        input.value = "";
      });
    });
    modal.create();
  }
}

export const createHeader = (page: Page, makers: BlockMaker[]) => {
  const videoBlockMaker = new MotionBlock();
  makers.forEach((maker) => {
    headerTabs.forEach((element) => {
      if (maker.NAME === element.getAttribute("name")) {
        const tab = new HeaderTab(videoBlockMaker, maker, page);
        element.addEventListener("click", tab.onClick.bind(tab));
      }
    });
  });
  // headerTabs.forEach((element) => {
  //   const name = element.getAttribute("name") as HeaderTabName;
  //   makers;
  // });
};

export default header;
