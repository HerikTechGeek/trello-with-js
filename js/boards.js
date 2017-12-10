var app = require('boards.js');

(function() {    
    function Boards() {
        console.log(" Boards Constructor called");
        this.boards = {};
        this.keyGenerator = new app.Helper().KeyGenerator();
    }

    function Board(id, title, createdBy) {
        console.log("new Board Created");
        this.id = id;
        this.title = title;
        this.createdBy = createdBy;
        this.createdOn = new Date();
    }

    Boards.prototype.create = function(title, createdBy) {
        console.log("Boards create called");
        var board = new Board(this.keyGenerator(), title, createdBy);
        this.boards.push(board);
        console.log("Boards create called", this.boards);
    }
}());