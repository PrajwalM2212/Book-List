// Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// Constructor for UI related operations
function UI() {

}

UI.prototype.addBook = function (book) {

    const tableBody = document.getElementById("table-body");
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `<td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a class="delete" href="#">X</a></td>`;
    tableBody.appendChild(tableRow);
}

UI.prototype.removeBook = function (target) {

    target.parentElement.parentElement.remove();

}

UI.prototype.showMessage = function(msg,success){

    const div = document.createElement("div");
    div.appendChild(document.createTextNode(msg));

    const container = document.querySelector(".container");
    const form = document.getElementById("input-form");

    if(success){
        div.style.backgroundColor = "green";
    }else{
        div.style.backgroundColor = "red";
    }

    container.insertBefore(div,form);

    setTimeout(function(){
        div.remove();
    },3000);

}

// Add interactivity

// Add Book 
const form = document.getElementById("input-form");
form.addEventListener("submit", function (e) {

    const title = document.getElementById("title-input").value;
    const author = document.getElementById("author-input").value;
    const isbn = document.getElementById("isbn-input").value;

    const book = new Book(title, author, isbn);

    const ui = new UI();

    if (title === "" || author === "" || isbn === "") {

        ui.showMessage("Please fill all the fields to add the book",false);

    } else {

        ui.addBook(book);
        ui.showMessage("Book added successfully",true);
    }

    e.preventDefault();

});


// Remove Book
const tableBody = document.getElementById("table-body");
tableBody.addEventListener("click", function (e) {

    const ui = new UI();

    if (e.target.className === "delete") {
        ui.removeBook(e.target);
        ui.showMessage("Book removed!",true);
    }

});
