function Board(id, title, createdBy) {
    console.log("new Board Created");
    this.id = id;
    this.title = title;
    this.createdBy = createdBy;
    this.createdOn = new Date();

}

function Boards() {
    console.log(" Boards Constructor called");
    this.boards = {};
    this.helpers = new Helpers()
    this.keyGenerator = this.helpers.KeyGenerator();
}
Boards.prototype.init = function() {
    this.create('Default', 'Default User');

    this.helpers.bindEvents(this);

    this.renderHeader();
    this.renderContent();
    this.renderFooter();
}

Boards.prototype.create = function(title, createdBy) {
    console.log("Boards create called");
    debugger;
    var id = this.keyGenerator()
    var board = new Board(id, title, createdBy);
    this.boards[id] = board;
    console.log("Boards create called", this.boards);
}


Boards.prototype.renderContent = function() {
    var btnAddBoard = $('<button id="addNewBoard">Add Board</button>');
    btnAddBoard.click(function(){
        this.create('Default', 'Default User');
    });

    document.getElementById('content').appendChild(btnAddBoard);

}