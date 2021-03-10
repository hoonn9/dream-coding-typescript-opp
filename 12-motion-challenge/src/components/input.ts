interface InputImpl {
  title: string;
  value: string | null;
  element: HTMLDivElement;
}

export class Input implements InputImpl {
  public element: HTMLDivElement;
  private input: HTMLInputElement;
  constructor(private aTitle: string) {
    const { element, input } = this.createInput();
    this.element = element;
    this.input = input;
  }

  get title() {
    return this.aTitle;
  }

  get value() {
    return this.input.value;
  }

  set value(value: string) {
    this.input.value = value;
  }

  private createInput() {
    const inputWrapper = document.createElement("div");
    inputWrapper.className = "modal-input-wrapper";
    const label = document.createElement("label");
    label.className = "modal-input-label";
    label.innerText = this.title;
    const input = document.createElement("input");
    input.className = "modal-input";
    inputWrapper.appendChild(label);
    inputWrapper.appendChild(input);
    return {
      element: inputWrapper,
      input: input,
    };
  }
}
