
import { ModalBase, ModalComponentParams } from "../IModal";
import ChildModal from "../ChildModal/ChildModal";

const COMPONENT_NAME = "sub-child-modal";
const COMPONENT_ID = COMPONENT_NAME + '-id';
const TITLE = "サブ子モーダル";

export default class SubChildModal extends ModalBase {

    subSubChildModal: SubChildModal;

    constructor() {
        super(COMPONENT_NAME, COMPONENT_ID, TITLE);
    }

    onCreateViewModel(params: ModalComponentParams): void {
        super.onCreateViewModel(params);
        let parent = <ChildModal>this.component.params.parent;
        parent.subChildModal = this;
    }
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
                vm = new SubChildModal();
                vm.onCreateViewModel(params);

                ko.track(vm);
            }
            return vm;
        }
    }
});