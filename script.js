const test1 = new Book("Siddartha","Herman Hesse",295,"Read");
const test2 = new Book("Bone","Jeff Smith",150,"Not Read");
const test3 = new Book("The Sympathizer","Viet Thanh Nguyen",350,"Read");
let myLibrary = [test1,test2,test3];


const cardContainer = document.querySelector(".card-container");

const newBookButton = document.querySelector(".new-book");
const dialog = document.querySelector("dialog");
const closeButton = document.querySelector(".close-button")
const submitButton = document.querySelector(".submit-button");

const form = document.querySelector('form')
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pageInput = document.querySelector("#pageNum");
const readInput = document.querySelector("#readInput");

function Book(name,author,pageNum,readStatus) {
    this.name = name;
    this.author = author;
    this.pageNum = pageNum
    this.readStatus = readStatus;
}

newBookButton.addEventListener("click",() => {
    dialog.showModal();
});

closeButton.addEventListener("click", () =>{
    dialog.close();
})

submitButton.addEventListener("click", (e) =>{
    if(!form.checkValidity()) {
        form.reportValidity();
    } else {
        e.preventDefault(); 
        addToLibrary(titleInput.value,authorInput.value,pageInput.value,readInput.checked);
        dialog.close();
    }
    

    

});

function addToLibrary(name,author,pageNum,readStatus) {
    let newBook = new Book(name,author,pageNum,readStatus)
    myLibrary.push(newBook);
    createBookDisplay();
}


/*
function: removeBook
Params: bookObj | book Objet to be removed from myLibrary array
          cardDiv | card Div that holds entire book information.

Deletes bookObj from array, cardDiv from DOM 
*/
function removeBook(bookObj,cardDiv){
    let bookLocation = myLibrary.findIndex( (ele) => ele ===bookObj);
    myLibrary.splice(bookLocation,1);
    cardDiv.remove();
    console.log(myLibrary);
}

function toggleStatus(div){
    //This is hardcoded, learn how to fix this to be better
    let readSpan = div.childNodes[3];
    if(readSpan.textContent == "Status: Read"){
        readSpan.textContent = "Status: Not Read";
    } else {
        readSpan.textContent = "Status: Read";
    }

}

function refreshBookDisplay() {
    cardContainer.innerHTML ="";
}

/*Iterates through the myLibrary array, creating a div card for each book.
*/
function createBookDisplay(){
    refreshBookDisplay();
    myLibrary.forEach( (i) => {
        let div = document.createElement("div");
        div.classList.add("card");

        let nameSpan = document.createElement("span");
        let authorSpan = document.createElement("span");
        let pageSpan = document.createElement("span");
        let readSpan = document.createElement("span");
        
        let delButton = document.createElement("button");
        let statusToggle = document.createElement("button");
        
        nameSpan.classList.add("title");
        delButton.classList.add("close-button");
        console.log(i); 
        console.log(i.author);
        nameSpan.textContent = i.name;
        authorSpan.textContent = `By: ${i.author}`;
        pageSpan.textContent = `Page #: ${i.pageNum}`;
        readSpan.textContent = `Status: ${i.readStatus}`;
        
        delButton.addEventListener("click", (e) => {
            removeBook(i,e.target.parentNode);
        });
        
        statusToggle.addEventListener("click",(e) => {
            toggleStatus(e.target.parentNode)
        });
        statusToggle.textContent = "Change Read Status";
        
        
        

        div.appendChild(nameSpan);
        div.appendChild(authorSpan);
        div.appendChild(pageSpan);
        div.appendChild(readSpan);
        div.appendChild(delButton);
        div.appendChild(statusToggle);
        cardContainer.appendChild(div);
        
    });

}

createBookDisplay();


/*
TODO:
add requirement stars on each form,
style the rest of css.
*/