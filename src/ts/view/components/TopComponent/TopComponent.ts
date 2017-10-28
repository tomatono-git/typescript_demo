/** コンポーネント名 */
const COMPONENT_NAME: string = "top-component";

export default class TopComponent {

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
        console.log("TopComponent#onCreateViewModel()");
    }

    onClickDisplayBtn(target: this, event: Event) {
        let message = this.createDisplayMesasge();
        alert(message);
    }

    private callService(): Promise<DummyData> {
        try {
            console.log('callService START');
            let promise = new Promise<DummyData>(() => {
                let dummy = new DummyData('value1');
                console.log('callService:dummy=%o', dummy.toString());
                return dummy;
            });
            return promise;
        } finally {
            console.log('callService END');
        }
    }
    private createData(): Promise<[DummyData, String]> {
        try {
            console.log('createData START');
            let promise = this.callService().then((data) => {
                console.log('createData:data=%o', data.toString());
                let tuple: [DummyData, string] = [data, 'createData'];
                return tuple;
            });
            return promise;
        } finally {
            console.log('createData END');
        }
    }

    onClickPromiseTestBtn(target: this, event: Event) {
        console.debug('onClickPromiseTestBtn START');

        // alert('onClickPromiseTestBtn START');

        let promise = this.createData().then((data) => {
            // func(dumy)
            let [dummy, str] = data;
            console.log('1:dummy=%o, str=%o', dummy.toString(), str);
            dummy.key2 = 'value22'
            console.log('2-1:dummy=%o, str=%o', dummy.toString(), str);
            return dummy;
        });

        promise.then((data) => {
            console.log('2-2:data=%o', data.toString());
            data.key3 = 'value333'
            console.log('3-1:data=%o', data.toString());
            return data
        }).then((data) => {
            console.debug('then-3-2:data=%o', data.toString());
            data.key4 = 'value4444'
            console.debug('throw-4 data=%o', data.toString());
            throw data;
        }).then((data) => {
            console.debug('then:data=%o', data);
        }).catch((data) => {
            console.error('catch:data=%o', data.toString());
        });
        console.debug('onClickPromiseTestBtn END');
    }

    onClickTupleTestBtn(target: this, event: Event) {
        let promise: Promise<[DummyData, string, number][]> = new Promise<DummyData[]>((resolve) => {
            let list = [...Array(5).keys()].map((i) => {
                return new DummyData(`val_${i}`, '', '', '', i);
            });
            console.log('list=%o', list);
            resolve(list);
        }).then((list) => {
            console.log('then');
            let promiseList = list.map((dummy) => {
                return new Promise<[DummyData, string]>((resolve) => {
                    let data: [DummyData, string] = [dummy, dummy.key1 + '_str1'];
                    console.log('list.map - new Promise: data=%o', data);
                    resolve(data);
                }).then(([dumy, str]) => {
                    console.log('list.map - then: dumy=%o, str=%o', dumy, str);
                    let num: number = (dummy.num != undefined) ? dummy.num : -1;
                    let data: [DummyData, string, number] = [dummy, str, num];
                    return data;
                });
            });
            console.log('promiseList=%o', promiseList);

            let allList = Promise.all(promiseList);
            console.log('allList=%o', allList);
            return allList;
        });

        promise.then((list) => {
            console.debug('promise.then: list', list);
            return list.map(data => {
                let [dummy, str, num] = data;
                let newData: [DummyData, string, number, string] = [dummy, str, num, dummy.key1 + '_str2']
                console.log('Promise.all: newData', newData);
                return newData
            });
        }).then((list) => {
            list.forEach((data) => {
                console.debug('promise.then - last: data', data);
            });
            throw list
        }).catch((list) => {
            console.error(list);
        });
        // promise.then((data) => {
        //     console.debug('promise.then: data', data);
        // });
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

class DummyData {
    // key1: string
    // key2: string
    // key3: string
    constructor(
        public key1?: string,
        public key2?: string,
        public key3?: string,
        public key4?: string,
        public num?: number
    ) {
    }

    toString() {
        return `key1=${this.key1},key2=${this.key2},key3=${this.key3},key4=${this.key4},num=${this.num}`
    }
}

// require("./Application.css");
// require("./images/split/horizontal.png");
// require("./images/split/vertical.png");
ko.components.register(COMPONENT_NAME, {
    template: require("./TopComponent.html"),
    viewModel: {
        createViewModel(params?, componentInfo?): any {
            let vm: TopComponent;
            if (params instanceof TopComponent) {
                vm = params;
            } else {
                if (params == null) {
                    vm = new TopComponent();
                    vm.onCreateViewModel();
                } else {
                    vm = params.options;
                }
            }
            return vm;
        }
    }
});