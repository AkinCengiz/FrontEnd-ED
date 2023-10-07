//MOUSE EVENTLERİ

const cardBody = document.querySelectorAll(".card-body")[1];
const title = document.querySelector("#tasks-title");
const btnTodo = document.getElementById("todo-form").lastElementChild;
const btnClear = document.getElementById("clear-todos");

console.log(cardBody);
console.log(title);
console.log(btnTodo);
console.log(btnClear);

//click Eventi

title.addEventListener("click",run);

function run(e){
    console.log(e.type);
}

//doubleClick eventi
title.addEventListener("dblclick",run2);

function run2(e){
    console.log(e.type);
}

//mousedown eventi
cardBody.addEventListener("mousedown",changeColor);
function changeColor(e){
    cardBody.style.backgroundColor = "grey";
}

//mouseup eventi
cardBody.addEventListener("mouseup",bgChange);
function bgChange(e){
    cardBody.style.backgroundColor = "green";
}

//mouseover eventi

btnTodo.addEventListener("mouseover",btnOver);

function btnOver(e){
    btnTodo.classList.remove("btn-danger");
    btnTodo.classList.add("btn-success");
}

//mouseout eventi
btnTodo.addEventListener("mouseout",btnLeave);

function btnLeave(e){
    btnTodo.classList.remove("btn-success");
    btnTodo.classList.add("btn-danger");
}

//mouseenter eventi ve mouseleave eventi
btnClear.addEventListener("mouseenter", mEnter);
btnClear.addEventListener("mouseleave",mLeave);
function mEnter(e){
    btnClear.classList.remove("btn-dark");
    btnClear.classList.add("btn-primary");
}
function mLeave(e){
    btnClear.classList.remove("btn-primary");
    btnClear.classList.add("btn-dark");
}