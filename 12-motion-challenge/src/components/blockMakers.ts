import { addBlock, BlockData, BlockType, BodyBlock, UrlBlock } from "../utils/db.js";
import { YoutubeIFrame } from "../utils/youtube.js";
import { Input } from "./input.js";

export interface BlockMaker {
  NAME: string;
  inputs: Input[];
  block(): HTMLDivElement;
  save(): BlockData<BlockType>;
}

export class ImageBlockMaker implements BlockMaker {
  public NAME = "image";
  private titleInput;
  private urlInput;
  constructor() {
    this.titleInput = new Input("title");
    this.urlInput = new Input("url");
  }

  get inputs() {
    return [this.titleInput, this.urlInput];
  }

  block() {
    const wrapper = document.createElement("div");
    wrapper.setAttribute("style", "display: flex;");
    const img = document.createElement("img");
    img.src = this.urlInput.value;
    wrapper.appendChild(img);

    const title = document.createElement("div");
    title.style.color = "#FFF";
    title.innerText = this.titleInput.value;
    wrapper.appendChild(title);
    return wrapper;
  }

  save() {
    const newBlock: BlockData<UrlBlock> = {
      id: 0,
      block: {
        type: "url",
        blockType: "image",
        title: this.titleInput.value,
        url: this.urlInput.value,
      },
    };
    addBlock(newBlock);
    return newBlock;
  }
}

export class VideoBlockMaker implements BlockMaker {
  public NAME = "video";
  public player?: YT.Player;
  private titleInput;
  private urlInput;
  constructor() {
    this.titleInput = new Input("title");
    this.urlInput = new Input("url");
  }

  get inputs() {
    return [this.titleInput, this.urlInput];
  }

  block() {
    const wrapper = document.createElement("div");
    wrapper.setAttribute("style", "display: flex;");
    const yt = new YoutubeIFrame(wrapper, 200, 400, this.urlInput.value);
    if (yt.player?.getIframe()) {
      wrapper.appendChild(yt.player?.getIframe());
    }
    const title = document.createElement("div");
    title.style.color = "#FFF";
    title.innerText = this.titleInput.value;
    wrapper.appendChild(title);

    return wrapper;
  }

  save() {
    const newBlock: BlockData<UrlBlock> = {
      id: 0,
      block: {
        type: "url",
        blockType: "video",
        title: this.titleInput.value,
        url: this.urlInput.value,
      },
    };
    addBlock(newBlock);
    return newBlock;
  }
}

export class NoteBlockMaker implements BlockMaker {
  public NAME = "note";
  private titleInput;
  private bodyInput;
  constructor() {
    this.titleInput = new Input("title");
    this.bodyInput = new Input("body");
  }

  get inputs() {
    return [this.titleInput, this.bodyInput];
  }

  block() {
    const wrapper = document.createElement("div");

    const title = document.createElement("div");
    title.style.color = "#FFF";
    title.innerText = this.titleInput.value;
    wrapper.appendChild(title);

    const body = document.createElement("div");
    body.style.color = "#FFF";

    body.innerText = this.bodyInput.value;
    wrapper.appendChild(body);

    return wrapper;
  }

  save() {
    const newBlock: BlockData<BodyBlock> = {
      id: 0,
      block: {
        type: "body",
        blockType: "note",
        title: this.titleInput.value,
        body: this.bodyInput.value,
      },
    };
    console.log("newBlock", newBlock);
    addBlock(newBlock);
    return newBlock;
  }
}

export class TaskBlockMaker implements BlockMaker {
  public NAME = "task";
  private titleInput;
  private bodyInput;
  constructor() {
    this.titleInput = new Input("title");
    this.bodyInput = new Input("body");
  }

  get inputs() {
    return [this.titleInput, this.bodyInput];
  }

  block() {
    const wrapper = document.createElement("div");

    const title = document.createElement("div");
    title.style.color = "#FFF";
    title.innerText = this.titleInput.value;
    wrapper.appendChild(title);

    const todo = document.createElement("div");

    todo.style.color = "#FFF";
    todo.innerText = `🧻${this.titleInput.value}`;
    wrapper.appendChild(title);
    wrapper.appendChild(todo);

    return wrapper;
  }

  save() {
    const newBlock: BlockData<BodyBlock> = {
      id: 0,
      block: {
        type: "body",
        blockType: "task",
        title: this.titleInput.value,
        body: this.bodyInput.value,
      },
    };
    addBlock(newBlock);
    return newBlock;
  }
}
