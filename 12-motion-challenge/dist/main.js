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
        var _this = this;
        if (!this.bodyContent) {
            throw new Error("#body content element is not exist.");
        }
        var blocks = selectAllBlocks();
        console.log(blocks);
        blocks.map(function (block) {
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
                    (_a = _this.bodyContent) === null || _a === void 0 ? void 0 : _a.appendChild(new MotionBlock().create(maker));
                }
            });
        });
    };
    Page.prototype.addBlock = function (block, maker) {
        if (!this.bodyContent) {
            throw new Error("#body content element is not exist.");
        }
        this.blocks.push(block);
        this.bodyContent.appendChild(block.create(maker));
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
