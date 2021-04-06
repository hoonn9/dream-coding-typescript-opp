import { Form } from "./form.js";
import { Modal } from "./modal.js";
import { MotionBlock } from "./block.js";
var header = document.querySelector("#header-wrapper");
var headerTabs = document.querySelectorAll(".header-menu-button");
var HeaderTab = /** @class */ (function () {
    function HeaderTab(motionBlock, blockMaker, page) {
        this.motionBlock = motionBlock;
        this.blockMaker = blockMaker;
        this.page = page;
    }
    HeaderTab.prototype.onClick = function () {
        var _this = this;
        var newForm = new Form(this.blockMaker.inputs);
        var modal = new Modal(newForm.form, function () {
            console.log("onCLick");
            _this.page.addBlock(_this.motionBlock, _this.blockMaker);
            _this.blockMaker.inputs.forEach(function (input) {
                input.value = "";
            });
        });
        modal.create();
    };
    return HeaderTab;
}());
export var createHeader = function (page, makers) {
    var videoBlockMaker = new MotionBlock();
    makers.forEach(function (maker) {
        headerTabs.forEach(function (element) {
            if (maker.NAME === element.getAttribute("name")) {
                var tab = new HeaderTab(videoBlockMaker, maker, page);
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
