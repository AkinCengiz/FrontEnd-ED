let value;
const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardRow = document.querySelector(".card.row");

value = todoList;
console.log(value);
console.log(todo);
console.log(cardRow);


//Child Nodes - Text Dahil Olmak Üzere Bütün Elementleri Alır
value = todoList.childNodes;
console.log(value);
value = todoList.childNodes[0];
console.log(value);

//Children - Elementleri Alır

value = todoList.children;
console.log(value);
value = todoList.children[0];
console.log(value);
value = todoList.children[todoList.children.length - 1];
console.log(value);
value = todoList.children[2].textContent = "Değişti";
console.log(value);

value = cardRow;
console.log(value);
value = cardRow.children;
console.log(value);

value = cardRow.children[2];
console.log(value);
value = cardRow.children[2].children[1].textContent = "Burası da değişti...";
console.log(value);

value = todoList;
value = todoList.children[0];//todolist elementinin 0. indeksinde bulunan çocuğu
value = todoList.firstElementChild; //todolist elementinin ilk çocuğu (0. index)
value = todoList.lastElementChild; //todoList elementinin som çocuğu 
value = todoList.children.length; // todoList elementinin çocuklarının sayısı
value = todoList.childElementCount; // todoList elementinin çocuklarının sayısı
console.log(value);

value = cardRow;
console.log(value);
value = cardRow.parentElement; // Elementi kapsayan ilk element (anne)
console.log(value);
value = cardRow.parentElement.parentElement; // elementi kapsayan elementi de kapsayan element
console.log(value);

//Element kardeşleri - (Ebeveyni aynı olan elementler)
value = todo;
console.log(value);
value = todo.previousElementSibling; // Elementin kendinden önce gelen kardeş elementi
console.log(value);
value = todo.nextElementSibling; //Elementin kendinden sonra gelen kardeş elementi
console.log(value);
value = todo.nextElementSibling.nextElementSibling; //Elementin kendinden sonra gelen kardeşinden sonraki kardeş elementi
console.log(value);
