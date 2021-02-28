var modalContainer = document.querySelector("#modal-container");
var ModalInput = /** @class */ (function () {
    function ModalInput(title) {
        this.title = title;
    }
    Object.defineProperty(ModalInput.prototype, "element", {
        get: function () {
            var inputWrapper = document.createElement("div");
            inputWrapper.className = "modal-input-wrapper";
            var label = document.createElement("label");
            label.className = "modal-input-label";
            label.innerText = this.title;
            var input = document.createElement("input");
            input.className = "modal-input";
            inputWrapper.appendChild(label);
            inputWrapper.appendChild(input);
            return inputWrapper;
        },
        enumerable: false,
        configurable: true
    });
    return ModalInput;
}());
export { ModalInput };
var ModalForm = /** @class */ (function () {
    function ModalForm(inputs) {
        this.inputs = inputs;
    }
    ModalForm.prototype.injection = function (parent) {
        var formWrapper = document.createElement("div");
        formWrapper.className = "modal-form-wrapper";
        this.inputs.forEach(function (input) { return formWrapper.appendChild(input.element); });
        parent.appendChild(formWrapper);
    };
    return ModalForm;
}());
export { ModalForm };
var Modal = /** @class */ (function () {
    function Modal(title, form) {
        this.title = title;
        this.form = form;
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
    Modal.prototype.create = function () {
        var _this = this;
        var wrapper = document.createElement("div");
        wrapper.id = "modal-wrapper";
        var closeButton = this.createCloseButton(function () {
            wrapper.remove();
            _this.setVisible(false);
        });
        wrapper.appendChild(closeButton);
        this.form.injection(wrapper);
        modalContainer === null || modalContainer === void 0 ? void 0 : modalContainer.appendChild(wrapper);
        this.setVisible(true);
    };
    return Modal;
}());
export { Modal };
