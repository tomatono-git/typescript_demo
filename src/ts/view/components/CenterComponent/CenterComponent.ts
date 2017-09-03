/** コンポーネント名 */
const COMPONENT_NAME: string = "center-component";

export default class CenterComponent {

    component: string;

    text1: string;
    text2: string;
    textArea1: string;
    radio1: string;
    checkBoxCheckes: string[];

    constructor() {
        this.component = COMPONENT_NAME;
        this.text1 = "";
        this.text2 = "";
        this.textArea1 = "";
        this.radio1 = "";
        this.checkBoxCheckes = [];

        ko.track(this);

    }

    onCreateViewModel() {
        console.log("onCreateViewModel()");

        // Split(['#subtree', '#main-contents'], {
        //     sizes: [25, 75],
        //     minSize: 200,
        //     // direction: 'horizontal'
        // });
    }

    onClickDisplayBtn(target: this, event: any) {
        let message = this.createDisplayMesasge();
        alert(message);
    }

    createDisplayMesasge(): string {
        let buff: string[] = [];
        buff.push(`text1=${this.text1}`);
        buff.push(`text2=${this.text2}`);
        buff.push(`textArea1=${this.textArea1}`);
        buff.push(`radio1=${this.radio1}`);
        buff.push(`checkBoxCheckes=${this.checkBoxCheckes}`);

        let message = buff.join(", ");

        return message;
    }
}

// require("./Application.css");
// require("./images/split/horizontal.png");
// require("./images/split/vertical.png");
ko.components.register(COMPONENT_NAME, {
    template: require("./CenterComponent.html"),
    viewModel: {
        createViewModel(params?, componentInfo?): any {
            let vm: CenterComponent;
            if (params instanceof CenterComponent) {
                vm = params;
            } else {
                if (params == null) {
                    vm = new CenterComponent();
                    vm.onCreateViewModel();
                } else {
                    vm = params.options;
                }
            }
            return vm;
        }
    }
});