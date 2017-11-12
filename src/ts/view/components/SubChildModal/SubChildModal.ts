
import { IModalParams, ModalParams, ModalBase, ModalComponent } from "../IModal";

const COMPONENT_NAME = "sub-child-modal";
const COMPONENT_ID = COMPONENT_NAME + '-id';
const TITLE = "サブ子モーダル";

export default class SubChildModal extends ModalBase {
    // component: string;
    // componentId: string;
    // title: string;

    subSubChildModal: SubChildModal;

    constructor() {
        super(COMPONENT_NAME, COMPONENT_ID);

        // ko.track(this);
    }

    // show<T>(params?: T): void {
    //     let options: ModalOptions = {
    //         backdrop: "static",
    //         show: true,
    //         keyboard: true,
    //     };
    //     console.log("params=%o, options=%o", params, options);

    //     $(`#${this.componentId}`).modal(options);

    // }

    // onClickShowModalBtn(self: this, event: JQuery.Event): void {
    //     console.log("self=%o, event=%o", self, event);

    //     this.subSubChildModal.show();
    // }

    // onCreateViewModel(): void {

    // }
}

ko.components.register(COMPONENT_NAME, {
    template: require("./SubChildModal.html"),
    viewModel: {
        createViewModel(params?, componentInfo?): any {
            console.log("params=%o", params);
            let vm: SubChildModal;
            if (params instanceof SubChildModal) {
                vm = params;
            } else {
                let options = params ? params.options : undefined;
                // vm = new SubChildModal(options);
                vm = new SubChildModal();
                vm.onCreateViewModel(options);
                // if (params == null) {
                //     vm = new SubChildModal();
                //     vm.onCreateViewModel();
                // } else {
                //     vm = new SubChildModal(params.options);
                //     // vm = params.options;
                // }
                ko.track(vm);
            }
            return vm;
        }
    }
});