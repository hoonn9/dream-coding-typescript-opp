import { Modal, ModalForm, ModalInput } from "./modal.js";
var header = document.querySelector("#header-wrapper");
var headerTabs = document.querySelectorAll(".header-menu-button");
var HeaderTab = /** @class */ (function () {
    function HeaderTab(name) {
        this.name = name;
    }
    HeaderTab.prototype.modalFormController = function () {
        var inputs = [new ModalInput("Title")];
        switch (this.name) {
            case "image":
            case "video":
                var urlInput = new ModalInput("Url");
                inputs.push(urlInput);
                break;
            case "note":
                inputs.push(new ModalInput("body"));
                break;
            case "task":
                inputs.push(new ModalInput("todo"));
                break;
            default:
                throw Error(name + " tab is not exist.");
        }
        return new ModalForm(inputs);
    };
    HeaderTab.prototype.onClick = function () {
        var modalForm = this.modalFormController();
        var modal = new Modal("test", modalForm);
        modal.create();
    };
    return HeaderTab;
}());
export var createHeader = function () {
    headerTabs.forEach(function (element) {
        var name = element.getAttribute("name");
        var tab = new HeaderTab(name);
        element.addEventListener("click", tab.onClick.bind(tab));
    });
};
export default header;
