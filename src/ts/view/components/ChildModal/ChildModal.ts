
import { IModalParams, ModalParams, ModalBase, ModalComponent } from "../IModal";
import SubChildModal from "../SubChildModal/SubChildModal";

const COMPONENT_NAME = "child-modal";
const COMPONENT_ID = COMPONENT_NAME + '-id';
const TITLE = "子モーダル";

export default class ChildModal extends ModalBase {
    // component: string;
    // componentId: string;
    // title: string;

    subChildModal: SubChildModal;

    constructor() {
        super(COMPONENT_NAME, COMPONENT_ID);
    }
    // constructor(parentId: string, title?: string) {
    //     super(COMPONENT_NAME, new ModalParams(COMPONENT_ID, parentId, (title != null) ? title : TITLE));
    //     // this.component = COMPONENT_NAME;
    //     // if (params != null) {
    //     //     if (params.parentId != null) {
    //     //         this.componentId = `${params.parentId}-${COMPONENT_ID}`;
    //     //     } else {
    //     //         this.componentId = COMPONENT_ID;
    //     //     }
    //     //     if (params.title != null) {
    //     //         this.title = params.title;
    //     //     } else {
    //     //         this.title = TITLE;
    //     //     }
    //     // }

    //     // let subChildModalParams = new ModalParams('sub', 'サブ子モーダル');
    //     this.subChildModal = new SubChildModal(this.componentId);

    //     ko.track(this);
    // }

    // show<T>(params?: T): void {
    //     let options: ModalOptions = {
    //         backdrop: "static",
    //         show: true,
    //         keyboard: true,
    //     };
    //     console.log("params=%o, options=%o", params, options);

    //     $(`#${this.componentId}`).modal(options);

    // }

    onClickShowModalBtn(self: this, event: JQuery.Event): void {
        console.log("self=%o, event=%o", self, event);

        this.subChildModal.show();
    }

    // onCreateViewModel(): void {

    // }
}

ko.components.register(COMPONENT_NAME, {
    template: require("./ChildModal.html"),
    viewModel: {
        createViewModel(params?, componentInfo?): any {
            console.log("params=%o", params);
            let vm: ChildModal;
            if (params instanceof ChildModal) {
                vm = params;
            } else {
                let options = params ? params.options : undefined;
                vm = new ChildModal();
                vm.onCreateViewModel(options);
                // if (params == null) {
                //     vm = new ChildModal();
                //     vm.onCreateViewModel();
                // } else {
                //     vm = new ChildModal(params.options);
                //     // vm = params.options;
                // }

                vm.subChildModal = new SubChildModal();

                ko.track(vm);
            }
            return vm;
        }
    }
});