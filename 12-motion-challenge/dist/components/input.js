var Input = /** @class */ (function () {
    function Input(aTitle) {
        this.aTitle = aTitle;
        var _a = this.createInput(), element = _a.element, input = _a.input;
        this.element = element;
        this.input = input;
    }
    Object.defineProperty(Input.prototype, "title", {
        get: function () {
            return this.aTitle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Input.prototype, "value", {
        get: function () {
            return this.input.value;
        },
        set: function (value) {
            this.input.value = value;
        },
        enumerable: false,
        configurable: true
    });
    Input.prototype.createInput = function () {
        var inputWrapper = document.createElement("div");
        inputWrapper.className = "modal-input-wrapper";
        var label = document.createElement("label");
        label.className = "modal-input-label";
        label.innerText = this.title;
        var input = document.createElement("input");
        input.className = "modal-input";
        inputWrapper.appendChild(label);
        inputWrapper.appendChild(input);
        return {
            element: inputWrapper,
            input: input,
        };
    };
    return Input;
}());
export { Input };
