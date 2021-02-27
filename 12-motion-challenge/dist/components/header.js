var header = document.querySelector("#header-wrapper");
var ImageButton = document.querySelector("#header-menu-image");
var VideoButton = document.querySelector("#header-menu-video");
var NoteButton = document.querySelector("#header-menu-note");
var TaskButton = document.querySelector("#header-menu-task");
var root = document.querySelector("root");
var Modal = /** @class */ (function () {
    function Modal(title) {
        this.title = title;
    }
    Modal.prototype.create = function () {
        var wrapper = document.createElement("div");
    };
    return Modal;
}());
export var createHeader = function () {
    console.log("createHeader");
};
export default header;
