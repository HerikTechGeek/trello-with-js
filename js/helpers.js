function Helpers() {
    console.log("Helpers Constructor called");
}

Helpers.prototype.KeyGenerator = function() {
    console.log("Helpers KeyGenerator called");
    var counter = 0;
    return function() {
        console.log(`Helpers KeyGenerator called for Counter ${counter + 1}`);
        return ++counter;
    }
}

Helpers.prototype.bindEvents = function(app) {
    $("#addNewBoard").click((event) => {
        // app.create();
    })
    // this.bindEvents();
}
