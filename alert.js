let myButton1 = document.querySelector("#alert-button1")
myButton1.addEventListener("click", ()=>{document.body.style.backgroundColor = "#FF2131"} )

let myButton2 = document.querySelector("#alert-button2")
myButton2.addEventListener("click", ()=>{document.body.style.backgroundColor = "#FF0000"} )

let myButton3 = document.querySelector("#alert-button3")
myButton3.addEventListener("click", ()=>{document.body.style.backgroundColor = "#FF5733";} )

let texButton = document.querySelector("#change-text")
const title = document.querySelector("#title")
texButton.addEventListener("click",()=>{
    title.textContent = "자바스크립트"
    title.style.backgroundColor = "#FF5733"
})
let button_1 = document.querySelector("#button")
button_1.addEventListener("click", ()=>{document.body.style.backgroundColor = "white";} )

// app.js
const commentInput = document.querySelector("#comment-input");
const commentButton = document.querySelector("#comment-button");
const commentList = document.querySelector("#comment-list");
    
commentButton.addEventListener("click", () => {
    const commentText = commentInput.value.trim();
    if (commentText !== "") {
        const li = document.createElement("li");
        li.textContent = commentText;
        commentList.appendChild(li);
        commentInput.value = "";
    }
});



alert('안녕')