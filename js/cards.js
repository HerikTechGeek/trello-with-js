function Card(id, title, createdBy) {
    console.log("new Card Created");
    this.id = id;
    this.title = title;
    this.createdBy = createdBy;
    this.createdOn = new Date();
}

function Cards() {
    console.log(" Cards Constructor called");
    this.cards = {};
    this.helpers = new Helpers();
    this.keyGenerator = this.helpers.KeyGenerator();
}

Cards.prototype.init = function() {
    this.bindEvents(this);
    this.create('Task should be editable', 'Sample Card Author Name');
    this.create('Can drag this and put it in other board', 'Sample Card Author Name');
    this.create('Can drag in same board to prioritize it', 'Sample Card Author Name');
    this.create('Should have add new textbox at the end of this list', 'Sample Card Author Name');
    this.create('Board can also be dragged and set priorities.', 'Sample Card Author Name');
    this.create('At the end try to implement masonry for board alignment.', 'Sample Card Author Name');
};

Cards.prototype.create = function(title, createdBy) {
    console.log("Cards create called");
    let id = this.keyGenerator(), card = new Card(id, title, createdBy);
    this.cards[id] = card;
    // this.renderContent();
    console.log("Cards create called", this.cards);
};

Cards.prototype.bindEvents = function (app) {
    // const newBoardPopup = $('#newBoardPopup');
    // $("#addNewBoard").click((event) => {
    //     newBoardPopup.dialog({
    //         modal: true
    //     });
    //     newBoardPopup.dialog('open');
    // });
    //
    // newBoardPopup.submit((event) => {
    //     event.preventDefault();
    //     let boardTitle = $("#boardTitle").val();
    //     let createdBy = $("#createdBy").val();
    //     console.log(boardTitle, createdBy);
    //     this.create(boardTitle, createdBy);
    //     debugger;
    // });
};