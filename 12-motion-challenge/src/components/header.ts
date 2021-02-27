const header = document.querySelector("#header-wrapper");
const ImageButton = document.querySelector("#header-menu-image");
const VideoButton = document.querySelector("#header-menu-video");
const NoteButton = document.querySelector("#header-menu-note");
const TaskButton = document.querySelector("#header-menu-task");
const root = document.querySelector("root");

class Modal {
  constructor(private title: string) {}

  create() {
    const wrapper = document.createElement("div");
  }
}

export const createHeader = () => {
  console.log("createHeader");
};

export default header;
