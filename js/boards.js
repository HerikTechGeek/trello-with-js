function Board(id, title, createdBy) {
    console.log("new Board Created");

    this.id = id;
    this.title = title;
    this.createdBy = createdBy;
    this.createdOn = new Date();

    this.cardObject = new Cards();
    this.cardObject.init();

}

function Boards() {
    console.log(" Boards Constructor called");
    this.boards = {};
    this.helpers = new Helpers();
    this.keyGenerator = this.helpers.KeyGenerator();
}
Boards.prototype.init = function() {   
    this.bindEvents(this);
    this.create('Next things to pick.', 'Herik Modi');
};

Boards.prototype.create = function(title, createdBy) {
    console.log("Boards create called");
    let id = this.keyGenerator();
    let  _board = new Board(id, title, createdBy);

    this.boards[id] = _board;

    this.renderContent();
    // console.log("Boards create called", this.boards);
};

Boards.prototype.renderContent = function() {
    let boardsHtml = '';
    const createList = (cardsList) => {
        if (cardsList && cardsList.length === 0) return;

        let cardsHtml = '<ul>';
        Object.keys(cardsList).forEach(key => {
            const card = cardsList[key];
            cardsHtml += `<li id="card-${card.id}">${card.title}</li>`
        });
        cardsHtml += '</ul>';
        return cardsHtml;
    };

    Object.keys(this.boards).forEach(key => {
        const board = this.boards[key];
        boardsHtml += `<div class='board' id="board-${board.id}">
                            <div class="header">
                                <p class="title">${board.title}</p>
                                <p class="author">${board.createdBy}</p>
                                <p class="createdOn">${board.createdOn.toDateString()}</p>
                            </div>
                            ${createList(board.cardObject.cards)}
                       </div>`;
    });
    $("#content").html(boardsHtml);            
}


Boards.prototype.bindEvents = function (app) {
    const newBoardPopup = $('#newBoardPopup');
    $("#addNewBoard").click((event) => {
        event.preventDefault();
        newBoardPopup.dialog({
            modal: true
        });
        newBoardPopup.dialog('open');
    });

    newBoardPopup.submit((event) => {
        event.preventDefault();
        let boardTitle = $("#boardTitle").val();
        let createdBy = $("#createdBy").val();        
        console.log(boardTitle, createdBy);
        this.create(boardTitle, createdBy);
        newBoardPopup.dialog('close');
        debugger;
    });
}