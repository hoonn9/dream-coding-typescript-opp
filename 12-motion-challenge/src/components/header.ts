import { Modal, ModalForm, ModalInput } from "./modal.js";

const header = document.querySelector("#header-wrapper");
const headerTabs = document.querySelectorAll(".header-menu-button");

type HeaderTabName = "image" | "video" | "note" | "task";

interface HeaderTabImpl {
  modalFormController(): ModalForm;
  onClick(): void;
}

class HeaderTab implements HeaderTabImpl {
  constructor(private name: HeaderTabName) {}

  modalFormController() {
    const inputs: ModalInput[] = [new ModalInput("Title")];
    switch (this.name) {
      case "image":
      case "video":
        const urlInput = new ModalInput("Url");
        inputs.push(urlInput);
        break;
      case "note":
        inputs.push(new ModalInput("body"));
        break;
      case "task":
        inputs.push(new ModalInput("todo"));
        break;
      default:
        throw Error(`${name} tab is not exist.`);
    }
    return new ModalForm(inputs);
  }

  onClick() {
    const modalForm = this.modalFormController();
    const modal = new Modal("test", modalForm);
    modal.create();
  }
}

export const createHeader = () => {
  headerTabs.forEach((element) => {
    const name = element.getAttribute("name") as HeaderTabName;
    const tab = new HeaderTab(name);
    element.addEventListener("click", tab.onClick.bind(tab));
  });
};

export default header;
