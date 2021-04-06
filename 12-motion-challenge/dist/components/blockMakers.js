import { addBlock } from "../utils/db.js";
import { YoutubeIFrame } from "../utils/youtube.js";
import { Input } from "./input.js";
var ImageBlockMaker = /** @class */ (function () {
    function ImageBlockMaker() {
        this.NAME = "image";
        this.titleInput = new Input("title");
        this.urlInput = new Input("url");
    }
    Object.defineProperty(ImageBlockMaker.prototype, "inputs", {
        get: function () {
            return [this.titleInput, this.urlInput];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBlockMaker.prototype, "index", {
        set: function (index) {
            this.index = index;
        },
        enumerable: false,
        configurable: true
    });
    ImageBlockMaker.prototype.block = function () {
        var wrapper = document.createElement("div");
        wrapper.setAttribute("style", "display: flex;");
        var img = document.createElement("img");
        img.src = this.urlInput.value;
        wrapper.appendChild(img);
        var title = document.createElement("div");
        title.style.color = "#FFF";
        title.innerText = this.titleInput.value;
        wrapper.appendChild(title);
        return wrapper;
    };
    ImageBlockMaker.prototype.save = function (index) {
        var newBlock = {
            id: index,
            block: {
                type: "url",
                blockType: "image",
                title: this.titleInput.value,
                url: this.urlInput.value,
            },
        };
        addBlock(newBlock);
        return newBlock;
    };
    return ImageBlockMaker;
}());
export { ImageBlockMaker };
var VideoBlockMaker = /** @class */ (function () {
    function VideoBlockMaker() {
        this.NAME = "video";
        this.titleInput = new Input("title");
        this.urlInput = new Input("url");
    }
    Object.defineProperty(VideoBlockMaker.prototype, "inputs", {
        get: function () {
            return [this.titleInput, this.urlInput];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VideoBlockMaker.prototype, "index", {
        set: function (index) {
            this.index = index;
        },
        enumerable: false,
        configurable: true
    });
    VideoBlockMaker.prototype.block = function () {
        var _a, _b;
        var wrapper = document.createElement("div");
        wrapper.setAttribute("style", "display: flex;");
        var yt = new YoutubeIFrame(wrapper, 200, 400, this.urlInput.value);
        if ((_a = yt.player) === null || _a === void 0 ? void 0 : _a.getIframe()) {
            wrapper.appendChild((_b = yt.player) === null || _b === void 0 ? void 0 : _b.getIframe());
        }
        var title = document.createElement("div");
        title.style.color = "#FFF";
        title.innerText = this.titleInput.value;
        wrapper.appendChild(title);
        return wrapper;
    };
    VideoBlockMaker.prototype.save = function (index) {
        var newBlock = {
            id: index,
            block: {
                type: "url",
                blockType: "video",
                title: this.titleInput.value,
                url: this.urlInput.value,
            },
        };
        addBlock(newBlock);
        return newBlock;
    };
    return VideoBlockMaker;
}());
export { VideoBlockMaker };
var NoteBlockMaker = /** @class */ (function () {
    function NoteBlockMaker() {
        this.NAME = "note";
        this.titleInput = new Input("title");
        this.bodyInput = new Input("body");
    }
    Object.defineProperty(NoteBlockMaker.prototype, "inputs", {
        get: function () {
            return [this.titleInput, this.bodyInput];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NoteBlockMaker.prototype, "index", {
        set: function (index) {
            this.index = index;
        },
        enumerable: false,
        configurable: true
    });
    NoteBlockMaker.prototype.block = function () {
        var wrapper = document.createElement("div");
        var title = document.createElement("div");
        title.style.color = "#FFF";
        title.innerText = this.titleInput.value;
        wrapper.appendChild(title);
        var body = document.createElement("div");
        body.style.color = "#FFF";
        body.innerText = this.bodyInput.value;
        wrapper.appendChild(body);
        return wrapper;
    };
    NoteBlockMaker.prototype.save = function (index) {
        var newBlock = {
            id: index,
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
    };
    return NoteBlockMaker;
}());
export { NoteBlockMaker };
var TaskBlockMaker = /** @class */ (function () {
    function TaskBlockMaker() {
        this.NAME = "task";
        this.titleInput = new Input("title");
        this.bodyInput = new Input("body");
    }
    Object.defineProperty(TaskBlockMaker.prototype, "inputs", {
        get: function () {
            return [this.titleInput, this.bodyInput];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TaskBlockMaker.prototype, "index", {
        set: function (index) {
            this.index = index;
        },
        enumerable: false,
        configurable: true
    });
    TaskBlockMaker.prototype.block = function () {
        var wrapper = document.createElement("div");
        var title = document.createElement("div");
        title.style.color = "#FFF";
        title.innerText = this.titleInput.value;
        wrapper.appendChild(title);
        var todo = document.createElement("div");
        todo.style.color = "#FFF";
        todo.innerText = "\uD83E\uDDFB" + this.titleInput.value;
        wrapper.appendChild(title);
        wrapper.appendChild(todo);
        return wrapper;
    };
    TaskBlockMaker.prototype.save = function (index) {
        var newBlock = {
            id: index,
            block: {
                type: "body",
                blockType: "task",
                title: this.titleInput.value,
                body: this.bodyInput.value,
            },
        };
        addBlock(newBlock);
        return newBlock;
    };
    return TaskBlockMaker;
}());
export { TaskBlockMaker };
