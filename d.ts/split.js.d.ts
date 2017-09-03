// declare Split: (ids: any, options?: {
//     [x: string]: any;
// }) => {
//     [x: string]: any;
//     setSizes: (newSizes: any) => void;
//     destroy: () => void;
// }

declare function Split(elements: HTMLElement | string[], options: SplitOptions): SplitAPI;

interface SplitOptions {
    sizes?: number[];
    minSize?: number[] | number;
    gutterSize?: number;
    snapOffset?: number;
    direction?: 'horizontal' | 'vertical' | string;
    cursor?: 'grabbing' | string;
    gutter?: Function;
    elementStyle?: Function;
    gutterStyle?: Function;
    onDrag?: Function;
    onDragStart?: Function;
    onDragEnd?: Function;
}

interface SplitAPI {
    [x: string]: any;
    setSizes: (newSizes: number[] | any) => void;
    collapse: (number: number) => void;
    destroy: () => void;
}


// setSizes,
//     getSizes() {
//     return elements.map(element => element.size)
// },
// collapse(i) {
//     if (i === pairs.length) {
//         const pair = pairs[i - 1]

//         calculateSizes.call(pair)

//         if (!isIE8) {
//             adjust.call(pair, pair.size - pair.bGutterSize)
//         }
//     } else {
//         const pair = pairs[i]

//         calculateSizes.call(pair)

//         if (!isIE8) {
//             adjust.call(pair, pair.aGutterSize)
//         }
//     }
// },
// destroy,