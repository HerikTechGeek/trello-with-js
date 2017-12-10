function App() {
    console.log("App called");
    var boards = new Boards();
    boards.init();
    debugger;
    return {
        boards: boards
    }
}

window.onload = function() {
    console.log("Doc Loaded", App);
    new App();
}