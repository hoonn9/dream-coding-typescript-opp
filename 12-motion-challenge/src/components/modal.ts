const modalContainer = document.querySelector("#modal-container");

interface ModalImpl {
  setVisible(visible: boolean): void;
  createCloseButton(onClick: () => void): void;
  create(): void;
  createAddButton(onClick: () => void): void;
}

export class Modal implements ModalImpl {
  constructor(private content: HTMLDivElement, private addOnClick: () => void) {}

  setVisible(visible: boolean) {
    modalContainer?.setAttribute("style", `visibility: ${visible ? "visible" : "hidden"}`);
  }

  createCloseButton(onClick: () => void): HTMLDivElement {
    const closeButtonWrapper = document.createElement("div");
    closeButtonWrapper.id = "modal-close-button-wrapper";
    const closeButton = document.createElement("button");
    closeButton.innerText = "✖";
    closeButton.id = "modal-close-button";
    closeButton.addEventListener("click", onClick);
    closeButtonWrapper.appendChild(closeButton);
    return closeButtonWrapper;
  }

  createAddButton(onClick: () => void): HTMLDivElement {
    const addButtonWrapper = document.createElement("div");
    addButtonWrapper.className = "modal-add-button-wrapper";

    const addButton = document.createElement("button");
    addButton.innerText = "ADD";
    addButton.className = "modal-add-button";
    addButton.addEventListener("click", onClick);
    addButtonWrapper.appendChild(addButton);
    return addButtonWrapper;
  }

  create() {
    const wrapper = document.createElement("div");
    wrapper.id = "modal-wrapper";

    const closeButton = this.createCloseButton(() => {
      wrapper.remove();
      this.setVisible(false);
    });
    const addButton = this.createAddButton(() => {
      this.addOnClick();
      wrapper.remove();
      this.setVisible(false);
    });

    wrapper.appendChild(closeButton);
    wrapper.appendChild(this.content);

    wrapper.appendChild(addButton);

    modalContainer?.appendChild(wrapper);
    this.setVisible(true);
  }
}
