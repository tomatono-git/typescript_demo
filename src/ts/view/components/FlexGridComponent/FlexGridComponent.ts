
import IComponent from "../IComponent";
import { FlexGrid, Column } from "../FlexGrid/FlexGrid";

const COMPONENT_NAME = "ex-flex-grid";
const COMPONENT_ID = COMPONENT_NAME;

export default class FlexGridComponent implements IComponent {
    /** コンポーネント名 */
    component: string;
    componentId: string;

    /** グリッド */
    protected _flexGrid: FlexGrid;

    /** グリッド */
    get flexGrid(): FlexGrid {
        return this._flexGrid;
    }

    /**
     * コンストラクタ
     */
    constructor() {
        this.component = COMPONENT_NAME;
        console.log(this.component);
        // ko.track(this);
    }

    /**
     * グリッドのコンポーネントが初期化された時の処理
     * @param self グリッドのコンポーネント
     * @param rawFlexGrid グリッド本体
     * @param args 引数
     */
    protected onInitialized(self: this, rawFlexGrid: wijmo.grid.FlexGrid, args: any): void {
        console.log("self=%o, rawFlexGrid=%o, args=%o", self, rawFlexGrid, args);

        self._flexGrid = self.createFlexGrid(rawFlexGrid);
    }

    protected createFlexGrid(rawFlexGrid: wijmo.grid.FlexGrid): FlexGrid {
        let options = {
            autoGenerateColumns: false,
            columns: [
                { binding: 'id', header: 'ID' },
                { binding: 'country', header: 'country' },
                { binding: 'date', header: 'date' },
                { binding: 'amount', header: 'amount' },
                { binding: 'active', header: 'active' },
            ],
            // columns: this.createColumns(),
        };
        console.log("options=%o", options);
        // グリッドの初期化
        rawFlexGrid.initialize(options);
        rawFlexGrid.itemsSource = new wijmo.collections.CollectionView()
        // グリッドのインスタンス生成
        let flexGrid = new FlexGrid(rawFlexGrid);

        return flexGrid;
    }

    // protected createColumns(): Column[] {
    //     var columns: Column[] = [
    //         new Column({ binding: 'id', header: 'ID' }),
    //         new Column({ binding: 'country', header: 'country' }),
    //         new Column({ binding: 'Date', header: 'Date' }),
    //         new Column({ binding: 'amount', header: 'amount' }),
    //         new Column({ binding: 'active', header: 'active' }),
    //     ];

    //     return columns;
    // }

    /**
     * グリッドのデータを設定
     * @param data グリッドのデータ
     */
    public setDataSource<T>(data: T[]): void {
        if (this._flexGrid) {
            this._flexGrid.setDataSource(data);
        } else {
            console.log("this._flexGrid is " + this._flexGrid);
        }
    }

    /**
     * インスタンスが生成された時の処理
     */
    onCreateViewModel(params: any) {
        console.log("FlexGridComponent#onCreateViewModel(): params=%o", params);
    }

    // static register(template: string, css?: string): void {
    //     if (css != null) {
    //         require(css);
    //     }

    //     ko.components.register(COMPONENT_NAME, {
    //         template: require(template),
    //         viewModel: {
    //             createViewModel(params?, componentInfo?): any {
    //                 let vm: FlexGridComponent;
    //                 if (params instanceof FlexGridComponent) {
    //                     vm = params;
    //                 } else {
    //                     if (params == null) {
    //                         vm = new FlexGridComponent();
    //                         vm.onCreateViewModel();
    //                     } else {
    //                         vm = params.options;
    //                     }
    //                 }
    //                 return vm;
    //             }
    //         }
    //     });
    // }



}

require("./FlexGridComponent.css");
ko.components.register(COMPONENT_NAME, {
    template: require("./FlexGridComponent.html"),
    viewModel: {
        createViewModel(params?, componentInfo?): any {
            console.log("params=%o", params);
            let vm: FlexGridComponent;
            if (params instanceof FlexGridComponent) {
                vm = params;
            } else {
                let options = params ? params.options : undefined;
                vm = new FlexGridComponent();
                vm.onCreateViewModel(options);
                // if (params != null && params.options != null) {
                //     vm = params.options;
                // } else {
                //     vm = new FlexGridComponent();
                //     vm.onCreateViewModel();
                // }
            }
            return vm;
        }
    }
});

// FlexGridComponent.register("./FlexGridComponent.html", "FlexGridComponent.css");
