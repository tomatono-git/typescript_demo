
/** コンポーネント名 */
const COMPONENT_NAME: string = "center-component";

export default class CenterComponent {

    component: string;
    componentId: string;

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

    onCreateViewModel(params: any) {
        console.log("CenterComponent#onCreateViewModel(): params=%o", params);
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
            console.log("params=%o", params);
            let vm: CenterComponent;
            if (params instanceof CenterComponent) {
                vm = params;
            } else {
                vm = new CenterComponent();
                let options = params ? params.options : undefined;
                vm.onCreateViewModel(options);
                // vm.onCreateViewModel(params.options);
                // if (params == null) {
                //     vm = new CenterComponent();
                //     vm.onCreateViewModel();
                // } else {
                //     vm = params.options;
                // }
            }
            return vm;
        }
    }
});