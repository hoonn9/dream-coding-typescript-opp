import { Input } from "./input.js";

interface FormImpl {
  inputs: Input[];
  form: HTMLDivElement;
}

export class Form implements FormImpl {
  constructor(private aInputs: Input[]) {}

  get inputs() {
    return this.aInputs;
  }

  get form() {
    const formWrapper = document.createElement("div");
    formWrapper.className = "modal-form-wrapper";
    this.inputs.forEach((input) => formWrapper.appendChild(input.element));

    return formWrapper;
  }
}
