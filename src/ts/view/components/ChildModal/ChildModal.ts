
import { ModalBase, ModalComponentParams } from "../IModal";
import SubChildModal from "../SubChildModal/SubChildModal";
import ParentModal from "../ParentModal/ParentModal";

const COMPONENT_NAME = "child-modal";
const COMPONENT_ID = COMPONENT_NAME + '-id';
const TITLE = "子モーダル";

export default class ChildModal extends ModalBase {

    static get COMPONENT_NAME(): string {
        return COMPONENT_NAME;
    }

    subChildModal: SubChildModal;

    constructor() {
        super(COMPONENT_NAME, COMPONENT_ID, TITLE);
    }

    onClickShowModalBtn(self: this, event: JQuery.Event): void {
        console.log("self=%o, event=%o", self, event);

        this.subChildModal.show();
    }

    onCreateViewModel(params: ModalComponentParams): void {
        super.onCreateViewModel(params);
        let parent = <ParentModal>this.component.params.parent;
        parent.childModal = this;
    }
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
                vm = new ChildModal();
                vm.onCreateViewModel(params);

                vm.subChildModal = new SubChildModal();

                ko.track(vm);
            }
            return vm;
        }
    }
});