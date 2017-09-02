/** コンポーネント名 */
const COMPONENT_NAME: string = "application";

export default class Application {

    component: string;

    text1: string;

    constructor() {
        this.component = COMPONENT_NAME;
        this.text1 = "";

        ko.track(this);
    }
}

ko.components.register(COMPONENT_NAME, {
    template: require("./Application.html"),
    viewModel: Application
});