var HEADER_HEIGHT = 150;
var BLOCK_HEIGHT = 150;
var MotionBlock = /** @class */ (function () {
    function MotionBlock() {
    }
    MotionBlock.prototype.create = function (blockMaker, changeSeqBlock, index) {
        var wrapper = document.createElement("div");
        wrapper.style.position = "relative";
        wrapper.style.display = "flex";
        wrapper.style.height = BLOCK_HEIGHT + "px";
        wrapper.addEventListener("dragstart", function (event) {
            console.log("start", event);
            var currentIndex = Math.floor((event.pageY - HEADER_HEIGHT) / BLOCK_HEIGHT);
            console.log("startIndex", currentIndex);
        });
        wrapper.addEventListener("dragend", function (event) {
            console.log("end", event);
            var currentIndex = Math.floor((event.pageY - HEADER_HEIGHT) / BLOCK_HEIGHT);
            console.log("endIndex", currentIndex);
            changeSeqBlock(index, currentIndex);
        });
        // blockMaker.save(index);
        var block = blockMaker.block();
        wrapper.appendChild(block);
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
