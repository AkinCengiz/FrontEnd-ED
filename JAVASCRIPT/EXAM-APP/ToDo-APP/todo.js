//TÜM ELEMENTLERİ SEÇELİM

document.body.style.backgroundColor = "#bbb";

const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filterInput = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

//Bu fonksiyon tüm event listenerleri tutar
eventListener();
function eventListener(){
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
    secondCardBody.addEventListener("click",deleteTodo);
    filterInput.addEventListener("keyup",filterFromTodos);
    clearButton.addEventListener("click", clearAllTodos);
}

function clearAllTodos(){
    if(confirm("Tümünü silmek istiyor musunuz?")){
        while(todoList.firstElementChild){
            todoList.removeChild(todoList.firstElementChild);
        }
        localStorage.removeItem("todos");
    }
    
}

//TODO Silme İşlemi
function deleteTodo(e){
    if(e.target.className === "fa fa-remove text-light"){
        e.target.parentElement.parentElement.remove();
        deleteTodoFromLocalStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success","Görev başarılı bir şekilde silindi...");
    }
}

//LOCALSTORAGE ÜZERİNDEN TODO SİLME
function deleteTodoFromLocalStorage(deleteTodo){
    let todos = getTodosFromLocalStorage();
    todos.forEach(function(todo,index){
        if(todo === deleteTodo){
            todos.splice(index,1);
        }
    });
    localStorage.setItem("todos",JSON.stringify(todos));
}

//LOCAL STORAGE ÜZERİNDEN TÜM TODO ELEMANLARINI EKRANA GETİRME
function loadAllTodosToUI(){
    let todos = getTodosFromLocalStorage();
    todos.forEach(function(todo){
        addTodoToUI(todo);
    });
}

//TODO EKLEME
function addTodo(e){
    const newTodo = todoInput.value.trim();

    if(newTodo === ""){
        showAlert("danger","Görev alanı boş geçilemez...");
    }else{
        addTodoToUI(newTodo);
        addTodoToLocalStorage(newTodo);
        showAlert("success","Görev başarılı bir şekilde eklendi...");
    }    
    todoInput.value = "";
    todoInput.focus();
    e.preventDefault();
}
//ARAYÜZ ÜZERİNDE TODO ELEMENTLERİNİ OLUŞTURMA
function addTodoToUI(newTodo){
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    const iElement = document.createElement("i");
    listItem.classList.add("list-group-item","d-flex","justify-content-between","bg-secondary","text-light");
    link.href = "#";
    link.classList.add("delete-item");
    iElement.classList.add("fa","fa-remove","text-light");

    link.appendChild(iElement);
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    todoList.appendChild(listItem);
}

//INPUT DEĞERİNE GÖRE EKRANDA ALERT MESAJI GÖSTERME
function showAlert(type,message){
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;

    firstCardBody.appendChild(alert);

    setTimeout(function(){
        alert.remove();
    },1000)
}

//LOCAL STORAGE ÜZERİNDEN TODO LİSTESİNİ ÇEKME
function getTodosFromLocalStorage(){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

//LOCAL STORAGE ÜZERİNE TODO EKLEME
function addTodoToLocalStorage(newTodo){
    let todos = getTodosFromLocalStorage();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

//TODO FİLTRELEME

function filterFromTodos(e){
    const filterText = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");

    listItems.forEach(function(item){
        const text = item.textContent.toLowerCase();
        if(text.indexOf(filterText) === -1)
        {
            item.setAttribute("style","display : none !important");
        }else{
            item.setAttribute("style","display : block");
        }
    })
}