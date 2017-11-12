export class DemoService {

    getA(): Promise<A> {

        return new Promise<A>((resolve: (result: A) => void,
            reject: (error: JQuery.jqXHR) => void): void => {

            let url = ''
            let params: JQuery.AjaxSettings<A> = {
                type: "GET",
                async: true,
                contentType: "application/json",
                success: resolve,
                error: reject,
            };

            $.ajax(url, params).then(
                (response) => {
                    resolve(response)
                }, (error) => {
                    reject(error);
                }
            );
        });
    }

    get<T>(url: string, params: JQuery.AjaxSettings<T>): Promise<T> {

        return new Promise<T>((resolve: (result: T) => void, reject: (error: JQuery.jqXHR) => void): void => {

            $.ajax(url, params).then(
                (response) => {
                    resolve(response)
                }, (error) => {
                    reject(error);
                }
            );

            // var defer = $.Deferred();
            // params.success = defer.resolve;
            // params.error = defer.reject;
            // $.ajax(url, params);
            // return defer.promise();
        });
    }

}

class A { value: string }
// class B { value: string }
// class C { value: string }

// class Entity {
//     a: A;
//     b: B;
//     c: C;
// }