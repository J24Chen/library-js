const test1 = new Book("Siddartha","Herman Hesse",295,"read");
const test2 = new Book("Bone","Jeff Smith",150,"Not Read");
const test3 = new Book("The Sympathizer","Viet Thanh Nguyen",350,"read");
let myLibrary = [test1,test2,test3];

const testButton = document.querySelector(".testButton");
const cardContainer = document.querySelector(".card-container");

function Book(name,author,pageNum,readStatus) {
    this.name = name;
    this.author = author;
    this.pageNum = pageNum
    this.readStatus = readStatus;
}


function addToLibrary(name,author,pageNum,readStatus) {
    let newBook = new Book(name,author,pageNum,readStatus)

    myLibrary.push(newBook);
}


/*Params: bookObj | book Objet to be removed from myLibrary array
          cardDiv | card Div that holds entire book information.

Deletes bookObj from array, cardDiv from DOM 
*/
function removeBook(bookObj,cardDiv){
    let bookLocation = myLibrary.findIndex( (ele) => ele ===bookObj);
    myLibrary.splice(bookLocation,1);
    cardDiv.remove();
    console.log(myLibrary);
}

function toggleStatus(){

}

/*Iterates through the myLibrary array, creating a div card for each book.
*/
function createBookDisplay(){
    myLibrary.forEach( (i) => {
        let div = document.createElement("div");
        div.classList.add("card");

        let nameSpan = document.createElement("span");
        let authorSpan = document.createElement("span");
        let pageSpan = document.createElement("span");

        let delButton = document.createElement("button");
        let statusToggle = document.createElement("button");

        nameSpan.classList.add("title");
        console.log(i); 
        console.log(i.author);
        nameSpan.textContent = i.name;
        authorSpan.textContent = `By: ${i.author}`;
        pageSpan.textContent = `Page #: ${i.pageNum}`;
        readSpan.textContent = `Status: ${i.readStatus}`;
        
        delButton.addEventListener("click", (e) => {
            removeBook(i,e.target.parentNode);
        });
        statusToggle.addEventListener("click",() => {
            toggleStatus(i,e.target)
        });
        delButton.textContent = "Remove";
        readSpan.textContent = "toggleRead";
        

        div.appendChild(nameSpan);
        div.appendChild(authorSpan);
        div.appendChild(pageSpan);
        div.appendChild(readSpan);
        div.appendChild(delButton);
        div.appendChild(readSpan);
        cardContainer.appendChild(div);
        
    });

}

testButton.addEventListener("click", createBookDisplay());
/* TODO:
Create a function that displays card array
    With button that deletes it 
    And button that toggles the read/unread button.

Go from there
*/