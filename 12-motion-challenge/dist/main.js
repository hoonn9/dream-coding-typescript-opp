var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { MotionBlock } from "./components/block.js";
import { ImageBlockMaker, NoteBlockMaker, TaskBlockMaker, VideoBlockMaker, } from "./components/blockMakers.js";
import * as Header from "./components/header.js";
import { selectAllBlocks } from "./utils/db.js";
var Page = /** @class */ (function () {
    function Page(makers) {
        this.makers = makers;
        this.blocks = [];
        this.bodyContent = document.querySelector("#body-content");
        this.init();
    }
    Page.prototype.init = function () {
        if (!this.bodyContent) {
            throw new Error("#body content element is not exist.");
        }
        var blocks = selectAllBlocks();
        this.blocks = blocks;
        this.updateRender(blocks);
        console.log("block", this.blocks);
    };
    Page.prototype.updateRender = function (blocks) {
        var _this = this;
        if (this.bodyContent) {
            this.bodyContent.innerHTML = "";
        }
        blocks.forEach(function (block, index) {
            _this.makers.forEach(function (maker) {
                var _a;
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
                    var readBlock = new MotionBlock();
                    (_a = _this.bodyContent) === null || _a === void 0 ? void 0 : _a.appendChild(readBlock.create(maker, _this.changeSeqBlock.bind(_this), index));
                }
            });
        });
    };
    Page.prototype.addBlock = function (block, maker) {
        if (!this.bodyContent) {
            throw new Error("#body content element is not exist.");
        }
        this.blocks.push(maker.save(this.blocks.length));
        this.bodyContent.appendChild(block.create(maker, this.changeSeqBlock.bind(this), this.blocks.length));
    };
    Page.prototype.changeSeqBlock = function (id, targetId) {
        //this context 문제 arrow function 또는 bind 로 해결
        console.log(id, targetId);
        console.log(this.blocks);
        var blocks = __spreadArrays(this.blocks);
        if (targetId < 0) {
            var moveBlock = blocks.splice(id, 1)[0];
            console.log("before removed ", blocks);
            console.log("moveBlock", moveBlock);
            blocks = __spreadArrays([moveBlock], blocks);
        }
        else {
            var temp = blocks[targetId];
            blocks[targetId] = blocks[id];
            blocks[id] = temp;
        }
        console.log("changed", blocks);
        this.blocks = blocks;
        this.updateRender(blocks);
    };
    return Page;
}());
export { Page };
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.run = function () {
        var makers = [new ImageBlockMaker(), new VideoBlockMaker(), new NoteBlockMaker(), new TaskBlockMaker()];
        var page = new Page(makers);
        Header.createHeader(page, makers);
    };
    return App;
}());
new App().run();
