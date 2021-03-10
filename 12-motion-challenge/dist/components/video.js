import { YoutubeIFrame } from "../utils/youtube.js";
var MotionBlock = /** @class */ (function () {
    function MotionBlock(blockMaker) {
        this.blockMaker = blockMaker;
    }
    MotionBlock.prototype.create = function () {
        var wrapper = document.createElement("div");
        wrapper.style.position = "relative";
        wrapper.style.display = "flex";
        wrapper.appendChild(this.blockMaker.block());
        wrapper.appendChild(this.createRemoveButton());
        return wrapper;
    };
    MotionBlock.prototype.createRemoveButton = function () {
        var button = document.createElement("button");
        button.innerText = "✖";
        button.style.color = "#FFF";
        button.style.position = "absolute";
        button.style.right = "8px";
        button.style.top = "8px";
        return button;
    };
    return MotionBlock;
}());
export { MotionBlock };
var VideoBlockMaker = /** @class */ (function () {
    function VideoBlockMaker(title, url) {
        this.title = title;
        this.url = url;
    }
    VideoBlockMaker.prototype.block = function () {
        var _a, _b;
        var wrapper = document.createElement("div");
        wrapper.setAttribute("style", "display: flex;");
        var yt = new YoutubeIFrame(wrapper, 200, 400, this.url);
        if ((_a = yt.player) === null || _a === void 0 ? void 0 : _a.getIframe()) {
            wrapper.appendChild((_b = yt.player) === null || _b === void 0 ? void 0 : _b.getIframe());
        }
        var title = document.createElement("div");
        title.style.color = "#FFF";
        title.innerText = this.title;
        wrapper.appendChild(title);
        return wrapper;
    };
    return VideoBlockMaker;
}());
export { VideoBlockMaker };
