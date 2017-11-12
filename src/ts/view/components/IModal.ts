import IComponent from "./IComponent";

export interface IModal extends IComponent {
    title: string;
}

// export class IModalParams {
//     componentId: string;
//     parentId?: string;
//     title?: string;
// }

// export class ModalParams implements IModalParams {

//     constructor(
//         public componentId: string,
//         // public parentId?: string,
//         public title?: string,
//     ) {
//     }
// }

export class ModalComponent {
    params: ModalComponentParams;

    constructor(
        public name: string,
        parent?: ModalBase,
    ) {
        this.params = new ModalComponentParams(parent);
    }
}

export class ModalComponentParams {

    constructor(
        public parent?: ModalBase,
        public title?: string,
    ) {
    }
}

export class ModalBase implements IModal {

    component: ModalComponent
    get componentName(): string | undefined {
        let value = (this.component != null) ? this.component.name : undefined;
        return value;
    }
    // component: string;
    componentId: string;
    title: string;

    constructor(componentName: string, componentId: string, title: string) {
        this.component = new ModalComponent(componentName);
        this.componentId = componentId;
        this.title = title ? title : '';

        console.log("componentName=%o, componentId=%o, this=%o", componentName, componentId, this);
    }

    show<T>(params?: T): void {
        let options: ModalOptions = {
            backdrop: "static",
            show: true,
            keyboard: true,
        };
        console.log("params=%o, options=%o", params, options);

        $(`#${this.componentId}`).modal(options);

    }

    onCreateViewModel(params: ModalComponentParams): void {
        this.component.params = params;

        let componentId: string | undefined;
        let title: string | undefined;
        if (params != null) {
            if (params.parent != null && params.parent.componentId != null) {
                componentId = `${params.parent.componentId}_${this.componentId}`;
            }
            if (params.title != null) {
                title = params.title;
            }
        }

        if (componentId != null) {
            this.componentId = componentId;
        } else {
            this.componentId = `${this.componentName}-id`;
        }
        if (title != null) {
            this.title = title;
        } else if (this.title == null) {
            this.title = '';
        }
    }
}
