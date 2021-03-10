var Form = /** @class */ (function () {
    function Form(aInputs) {
        this.aInputs = aInputs;
    }
    Object.defineProperty(Form.prototype, "inputs", {
        get: function () {
            return this.aInputs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Form.prototype, "form", {
        get: function () {
            var formWrapper = document.createElement("div");
            formWrapper.className = "modal-form-wrapper";
            this.inputs.forEach(function (input) { return formWrapper.appendChild(input.element); });
            return formWrapper;
        },
        enumerable: false,
        configurable: true
    });
    return Form;
}());
export { Form };
