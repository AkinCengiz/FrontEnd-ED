//Elementi Id 'e göre seçme

let element;
element = document.getElementById("todo-form");
element = document.getElementById("tasks-title");

//Element Class'a göre seçme

element = document.getElementsByClassName("list-group-item");
element = document.getElementsByClassName("card-header");

//Element Tag 'e göre element seçme
element = document.getElementsByTagName("div");

//Query Selector - CSS selector ile element seçme
element = document.querySelector(".list-group-item");
element = document.querySelector("#todo-form");

element = document.querySelectorAll(".list-group-item");
element = document.querySelectorAll(".card-body");

console.log(element);