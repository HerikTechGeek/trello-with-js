function App() {
    console.log("App called");
    var boards = new Boards();
    boards.init();
    return {
        boards: boards
    }
}

window.onload = function() {
    console.log("Doc Loaded", App);
    new App();
}