
import { ModalBase } from "../IModal";
import ChildModal from "../ChildModal/ChildModal";


const COMPONENT_NAME = "parent-modal";
const COMPONENT_ID = COMPONENT_NAME + '-id';
const TITLE = "親モーダル";

export default class ParentModal extends ModalBase {

    childModal: ChildModal;

    constructor() {
        super(COMPONENT_NAME, COMPONENT_ID, TITLE);
    }

    onClickShowModalBtn(self: this, event: JQuery.Event): void {
        console.log("self=%o, event=%o", self, event);

        console.log("childModel=%o", ko.components.get(ChildModal.COMPONENT_NAME, (definition) => {
            console.log("definition=%o", definition);
        }))

        this.childModal.show();
    }

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
                vm = new ParentModal();
                vm.onCreateViewModel(params);

                // vm.childModal = new ChildModal();
                ko.track(vm);
            }
            return vm;
        }
    }
});