const COMPONENT_NAME: string = "application";
const COMPONENT_ID: string = "application-template";

export default class Application {

    component: string;

    text1: string;

    constructor() {
        this.component = COMPONENT_NAME;
        this.text1 = "";

        // let x: JQuery<HTMLElement> = $("");
    }
}

ko.components.register(COMPONENT_NAME, {
    // template: { element: COMPONENT_ID },
    template: require("./Application.html"),
    viewModel: Application
});