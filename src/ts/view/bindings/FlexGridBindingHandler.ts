
import { FlexGridComponent } from "../components/FlexGridComponent/FlexGridComponent";

export class FlexGridBindingHandler implements KnockoutBindingHandler {

    init(element: any,
        valueAccessor: () => any,
        allBindingsAccessor?: KnockoutAllBindingsAccessor,
        viewModel?: FlexGridComponent,
        bindingContext?: KnockoutBindingContext): void {

        //
        console.log("element=%o, allBindingsAccessor=%o, viewModel=%o, bindingContext=%o",
            element, allBindingsAccessor, viewModel, bindingContext);

    }

    update(element: any,
        valueAccessor: () => any,
        allBindingsAccessor?: KnockoutAllBindingsAccessor,
        viewModel?: FlexGridComponent,
        bindingContext?: KnockoutBindingContext): void {

        //
        console.log("element=%o, allBindingsAccessor=%o, viewModel=%o, bindingContext=%o",
            element, allBindingsAccessor, viewModel, bindingContext);

    }

    // after?: Array<string>;
    // init?: (element: any, valueAccessor: () => any, allBindingsAccessor?: KnockoutAllBindingsAccessor, viewModel?: any, bindingContext?: KnockoutBindingContext) => void | { controlsDescendantBindings: boolean; };
    // update?: (element: any, valueAccessor: () => any, allBindingsAccessor?: KnockoutAllBindingsAccessor, viewModel?: any, bindingContext?: KnockoutBindingContext) => void;
    // options?: any;
    // preprocess?: (value: string, name: string, addBindingCallback?: (name: string, value: string) => void) => string;
    // [s: string]: any;
}

// ko.bindingHandlers.exFlexGrid = {
//     init: function (element, valueAccessor) {
//         $(element).focus(function () {
//             var value = valueAccessor();
//             value(true);
//         });
//         $(element).blur(function () {
//             var value = valueAccessor();
//             value(false);
//         });
//     },
//     update: function (element, valueAccessor) {
//         var value = valueAccessor();
//         if (ko.unwrap(value))
//             element.focus();
//         else
//             element.blur();
//     }
// };