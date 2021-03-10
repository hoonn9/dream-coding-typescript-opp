var MotionBlock = /** @class */ (function () {
    function MotionBlock() {
    }
    MotionBlock.prototype.create = function (blockMaker) {
        var wrapper = document.createElement("div");
        wrapper.style.position = "relative";
        wrapper.style.display = "flex";
        wrapper.addEventListener("dragstart", function (event) {
            console.log(event);
        });
        wrapper.appendChild(blockMaker.block());
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
