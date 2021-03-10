var modalContainer = document.querySelector("#modal-container");
var Modal = /** @class */ (function () {
    function Modal(content, addOnClick) {
        this.content = content;
        this.addOnClick = addOnClick;
    }
    Modal.prototype.setVisible = function (visible) {
        modalContainer === null || modalContainer === void 0 ? void 0 : modalContainer.setAttribute("style", "visibility: " + (visible ? "visible" : "hidden"));
    };
    Modal.prototype.createCloseButton = function (onClick) {
        var closeButtonWrapper = document.createElement("div");
        closeButtonWrapper.id = "modal-close-button-wrapper";
        var closeButton = document.createElement("button");
        closeButton.innerText = "✖";
        closeButton.id = "modal-close-button";
        closeButton.addEventListener("click", onClick);
        closeButtonWrapper.appendChild(closeButton);
        return closeButtonWrapper;
    };
    Modal.prototype.createAddButton = function (onClick) {
        var addButtonWrapper = document.createElement("div");
        addButtonWrapper.className = "modal-add-button-wrapper";
        var addButton = document.createElement("button");
        addButton.innerText = "ADD";
        addButton.className = "modal-add-button";
        addButton.addEventListener("click", onClick);
        addButtonWrapper.appendChild(addButton);
        return addButtonWrapper;
    };
    Modal.prototype.create = function () {
        var _this = this;
        var wrapper = document.createElement("div");
        wrapper.id = "modal-wrapper";
        var closeButton = this.createCloseButton(function () {
            wrapper.remove();
            _this.setVisible(false);
        });
        var addButton = this.createAddButton(function () {
            _this.addOnClick();
            wrapper.remove();
            _this.setVisible(false);
        });
        wrapper.appendChild(closeButton);
        wrapper.appendChild(this.content);
        wrapper.appendChild(addButton);
        modalContainer === null || modalContainer === void 0 ? void 0 : modalContainer.appendChild(wrapper);
        this.setVisible(true);
    };
    return Modal;
}());
export { Modal };
