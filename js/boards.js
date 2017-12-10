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
    this.bindEvents(this);    
}

Boards.prototype.create = function(title, createdBy) {
    console.log("Boards create called");
    let id = this.keyGenerator()
    let board = new Board(id, title, createdBy);
    this.boards[id] = board;
    this.renderContent();
    console.log("Boards create called", this.boards);
}

Boards.prototype.renderContent = function() {
    let boardsHtml = '';
    Object.keys(this.boards).forEach(key => {            
        boardsHtml += `<div class='board'  id="${this.boards[key].id}">
                            <div>${this.boards[key].title}</div>
                            <div>${this.boards[key].createdBy}</div>                       
                        </div>`;
    });
    $("#content").html(boardsHtml);            
}


Boards.prototype.bindEvents = function (app) {
    $("#addNewBoard").click((event) => {
        $("#newBoardPopup").dialog({
            modal: true,                        
        });
        $("#newBoardPopup").dialog('open');        
    })

    $("#newBoardPopup").submit((event) => {
        event.preventDefault();
        let boardTitle = $("#boardTitle").val();
        let createdBy = $("#createdBy").val();        
        console.log(boardTitle, createdBy);
        this.create(boardTitle, createdBy);
        debugger;
        
    })    
}