import Application from "./view/components/Application/Application";

$(() => {
    let vm = new Application();
    ko.applyBindings(vm, $("html")[0]);
});
