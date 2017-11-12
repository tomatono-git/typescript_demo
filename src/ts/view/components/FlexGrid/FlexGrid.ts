

export class Column extends wijmo.grid.Column {
    constructor(options?: any) {
        super(options);
    }
}

export class Row extends wijmo.grid.Row {
    constructor(dataItem?: any) {
        super(dataItem);
    }
}


export class FlexGrid {

    private raw: wijmo.grid.FlexGrid;

    constructor(rawFlexGrid: wijmo.grid.FlexGrid) {
        this.raw = rawFlexGrid;
    }

    get itemsSource(): wijmo.collections.CollectionView {
        return this.raw.itemsSource;
    }

    public initialize(options?: any) {
        this.raw.initialize(options);
        this.raw.itemsSource = new wijmo.collections.CollectionView()
    }

    public setDataSource(data: any[]) {
        let src = [];
        if (data != null && data.length > 0) {
            src.push(...data);
        }
        this.itemsSource.sourceCollection = src;
    }
}