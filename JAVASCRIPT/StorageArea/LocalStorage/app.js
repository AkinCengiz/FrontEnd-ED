//LOCAL STORAGE

//SetItem

localStorage.setItem("Hareket","Burpee");
localStorage.setItem("Tekrar",50);

//Get ITEM
const value = localStorage.getItem("Tekrar");
console.log(value);
console.log(typeof value);

//Clear lokal storage
localStorage.clear();

localStorage.setItem("Hareket","Burpee");
localStorage.setItem("Tekrar",50);

if(localStorage.getItem("sport") === null){
    console.log("Sport anahtarı bulunamadı...");
}else{
    console.log("Aradığınız anahtar kelime bulundu...");
}


//Local Storage array Yazma

const todos = ["Todo 1","Todo 2", "Todo 3"];
localStorage.setItem("todos",todos);
console.log(localStorage.getItem("todos"));
console.log(typeof localStorage.getItem("todos"));

localStorage.setItem("todos",JSON.stringify(todos));

const todoList = JSON.parse(localStorage.getItem("todos"));
console.log(todoList);


