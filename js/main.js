(function() {
    function App() {
        console.log("App called");
     }

     window.onload = function() {
         console.log("Doc Loaded", App);
         debugger;
         new App.Boards();
     }

    return {
        app: App
    }
}());