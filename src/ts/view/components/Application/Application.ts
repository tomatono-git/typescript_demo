import TopComponent from "../TopComponent/TopComponent";
import CenterComponent from "../CenterComponent/CenterComponent";
import BottomComponent from "../BottomComponent/BottomComponent";

/** コンポーネント名 */
const COMPONENT_NAME: string = "application";

export default class Application {

    component: string;

    topComponent: TopComponent;
    centerComponent: CenterComponent;
    bottomComponent: BottomComponent;

    constructor() {
        this.component = COMPONENT_NAME;

        this.topComponent = new TopComponent();
        this.centerComponent = new CenterComponent();
        this.bottomComponent = new BottomComponent();

        ko.track(this);
    }

    onCreateViewModel() {
        console.log("onCreateViewModel()");

        Split(['#subtree', '#main-contents'], {
            sizes: [15, 85],
            minSize: 100,
            // direction: 'horizontal'
        });
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