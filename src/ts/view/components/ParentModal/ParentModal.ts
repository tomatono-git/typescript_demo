
import { ModalBase, ModalParams, ModalComponent } from "../IModal";
import ChildModal from "../ChildModal/ChildModal";


const COMPONENT_NAME = "parent-modal";
const COMPONENT_ID = COMPONENT_NAME + '-id';
const TITLE = "親モーダル";

export default class ParentModal extends ModalBase {
    // component: string;
    // componentId: string;
    // title: string;

    childModal: ChildModal;

    constructor() {
        super(COMPONENT_NAME, COMPONENT_ID);
    }
    // constructor(params?: ModalParams | any) {
    //     let superParams: ModalParams;
    //     if (params instanceof ModalParams) {
    //         superParams = new ModalParams(COMPONENT_ID, params.parentId, TITLE);
    //     } else {
    //         superParams = new ModalParams(COMPONENT_ID, undefined, TITLE);
    //     }
    //     super(COMPONENT_NAME, superParams);
    //     // super(COMPONENT_NAME, superParams);
    //     // this.component = COMPONENT_NAME;
    //     // this.componentId = COMPONENT_ID;
    //     // this.title = TITLE;

    //     // let childParams = new ModalParams(this.componentId);
    //     this.childModal = new ChildModal(this.componentId);

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

        this.childModal.show();
    }

    // onCreateViewModel(): void {

    // }
}

ko.components.register(COMPONENT_NAME, {
    template: require("./ParentModal.html"),
    viewModel: {
        createViewModel(params?, componentInfo?): any {
            console.log("params=%o", params);
            let vm: ParentModal;
            if (params instanceof ParentModal) {
                vm = params;
            } else {
                let options = params ? params.options : undefined;
                vm = new ParentModal();
                vm.onCreateViewModel(options);
                // if (params == null) {
                //     vm = new ParentModal();
                //     vm.onCreateViewModel();
                // } else {
                //     vm = new ParentModal(params.options);
                //     // vm = params.options;
                // }


                vm.childModal = new ChildModal();
                ko.track(vm);
            }
            return vm;
        }
    }
});