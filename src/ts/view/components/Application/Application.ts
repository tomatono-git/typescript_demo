import { FlexGridComponent } from "../FlexGridComponent/FlexGridComponent";
import TopComponent from "../TopComponent/TopComponent";
import CenterComponent from "../CenterComponent/CenterComponent";
import BottomComponent from "../BottomComponent/BottomComponent";

/** コンポーネント名 */
import { FlexGridBindingHandler } from "../../bindings/FlexGridBindingHandler";
import { DemoRow } from "../../eitities/DemoData";

const COMPONENT_NAME: string = "application";

ko.bindingHandlers.exFlexGrid = new FlexGridBindingHandler();

export default class Application {

    component: string;

    flexGridComponent: FlexGridComponent;

    topComponent: TopComponent;
    centerComponent: CenterComponent;
    bottomComponent: BottomComponent;

    constructor() {
        this.component = COMPONENT_NAME;

        this.flexGridComponent = new FlexGridComponent();
        this.topComponent = new TopComponent();
        this.centerComponent = new CenterComponent();
        this.bottomComponent = new BottomComponent();

        ko.track(this);
    }

    onCreateViewModel() {
        console.log("Application#onCreateViewModel()");

        Split(['#subtree', '#main-contents'], {
            sizes: [15, 85],
            minSize: 100,
            // direction: 'horizontal'
        });
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
}

require("./Application.css");
// require("./images/split/horizontal.png");
// require("./images/split/vertical.png");
ko.components.register(COMPONENT_NAME, {
    template: require("./Application.html"),
    viewModel: {
        createViewModel(params?, componentInfo?): any {
            let vm: Application;
            if (params instanceof Application) {
                vm = params;
            } else {
                if (params == null) {
                    vm = new Application();
                    vm.onCreateViewModel();
                } else {
                    vm = params.options;
                }
            }
            return vm;
        }
    }
});