import Application from "./components/Application";

$(() => {
    let vm = new Application();
    ko.applyBindings(vm, $("html")[0]);
});