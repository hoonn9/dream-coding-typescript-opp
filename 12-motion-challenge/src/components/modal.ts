const modalContainer = document.querySelector("#modal-container");

interface ModalInputImpl {
  element: HTMLDivElement;
}

export class ModalInput implements ModalInputImpl {
  constructor(private title: string) {}

  get element() {
    const inputWrapper = document.createElement("div");
    inputWrapper.className = "modal-input-wrapper";
    const label = document.createElement("label");
    label.className = "modal-input-label";
    label.innerText = this.title;
    const input = document.createElement("input");
    input.className = "modal-input";
    inputWrapper.appendChild(label);
    inputWrapper.appendChild(input);
    return inputWrapper;
  }
}

interface ModalFormImpl {
  injection: (parent: HTMLDivElement) => void;
}

export class ModalForm implements ModalFormImpl {
  constructor(private inputs: ModalInput[]) {}
  injection(parent: HTMLDivElement) {
    const formWrapper = document.createElement("div");
    formWrapper.className = "modal-form-wrapper";
    this.inputs.forEach((input) => formWrapper.appendChild(input.element));
    parent.appendChild(formWrapper);
  }
}

interface ModalImpl {
  create(): void;
}

export class Modal implements ModalImpl {
  constructor(private title: string, private form: ModalForm) {}

  setVisible(visible: boolean) {
    modalContainer?.setAttribute("style", `visibility: ${visible ? "visible" : "hidden"}`);
  }

  createCloseButton(onClick: () => void) {
    const closeButtonWrapper = document.createElement("div");
    closeButtonWrapper.id = "modal-close-button-wrapper";
    const closeButton = document.createElement("button");
    closeButton.innerText = "✖";
    closeButton.id = "modal-close-button";
    closeButton.addEventListener("click", onClick);
    closeButtonWrapper.appendChild(closeButton);
    return closeButtonWrapper;
  }

  create() {
    const wrapper = document.createElement("div");
    wrapper.id = "modal-wrapper";

    const closeButton = this.createCloseButton(() => {
      wrapper.remove();
      this.setVisible(false);
    });
    wrapper.appendChild(closeButton);
    this.form.injection(wrapper);
    modalContainer?.appendChild(wrapper);
    this.setVisible(true);
  }
}
