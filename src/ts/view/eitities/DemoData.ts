export class DemoRow {
    constructor(
        public id?: number,
        public country?: string,
        public date?: Date,
        public amount?: number,
        public active?: boolean,
    ) { }
}

// { binding: 'id', header: 'ID' },
// { binding: 'country', header: 'country' },
// { binding: 'Date', header: 'Date' },
// { binding: 'amount', header: 'amount' },
// { binding: 'active', header: 'active' },