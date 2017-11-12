import IComponent from "../IComponent";
import FlexGridComponent from "../FlexGridComponent/FlexGridComponent";
import TopComponent from "../TopComponent/TopComponent";
import CenterComponent from "../CenterComponent/CenterComponent";
import BottomComponent from "../BottomComponent/BottomComponent";
import ParentModal from "../ParentModal/ParentModal";

/** コンポーネント名 */
import { FlexGridBindingHandler } from "../../bindings/FlexGridBindingHandler";
import { DemoRow } from "../../entities/DemoData";

const COMPONENT_NAME: string = "application";

ko.bindingHandlers.exFlexGrid = new FlexGridBindingHandler();

export default class Application implements IComponent {

    component: string;
    componentId: string;

    flexGridComponent: FlexGridComponent;

    topComponent: TopComponent;
    centerComponent: CenterComponent;
    bottomComponent: BottomComponent;

    parentModal: ParentModal;

    constructor() {
        this.component = COMPONENT_NAME;

        // グリッド
        this.flexGridComponent = new FlexGridComponent();
        // 上
        this.topComponent = new TopComponent();
        // 中央
        this.centerComponent = new CenterComponent();
        // 左
        this.bottomComponent = new BottomComponent();
        // モーダル
        this.parentModal = new ParentModal();

        ko.track(this);
    }

    onClickShowModalBtn(self: this, event: JQuery.Event): void {
        console.log("self=%o, event=%o", self, event);

        this.parentModal.show();
    }

    onClickLoadGridDataButton(self: this, event: JQuery.Event): void {
        console.log("self=%o, event=%o", self, event);

        // let rowItems: DemoRow = [];
        let rowItems = Array.from(Array(100).keys()).map((i) => {
            let row = new DemoRow();
            row.id = i + 1;
            row.active = true;
            row.country = `country${i + 1}`;
            row.date = new Date();
            row.amount = (i + 1) * 1000;
            return row;
        });
        console.log("rowItems=%o", rowItems);
        this.flexGridComponent.setDataSource(rowItems);
    }


    // onClickDisplayBtn(target: this, event: any) {
    //     let message = `text1=${this.text1}, text2=${this.text2}, textArea1=${this.textArea1}, radio1=${this.radio1}, checkBoxCheckes=${this.checkBoxCheckes}`;
    //     alert(message);
    // }

    onCreateViewModel(params: any) {
        console.log("Application#onCreateViewModel(): params=%o", params);

        Split(['#subtree', '#main-contents'], {
            sizes: [15, 85],
            minSize: 100,
            // direction: 'horizontal'
        });
    }

}

require("./Application.css");
// require("./images/split/horizontal.png");
// require("./images/split/vertical.png");
ko.components.register(COMPONENT_NAME, {
    template: require("./Application.html"),
    viewModel: {
        createViewModel(params?, componentInfo?): any {
            console.log("params=%o", params);
            let vm: Application;
            if (params instanceof Application) {
                vm = params;
            } else {
                vm = new Application();
                let options = params ? params.options : undefined;
                vm.onCreateViewModel(options);
                // if (params == null) {
                //     vm = new Application();
                //     vm.onCreateViewModel(params.options);
                // } else {
                //     vm = params.options;
                // }
            }
            return vm;
        }
    }
});