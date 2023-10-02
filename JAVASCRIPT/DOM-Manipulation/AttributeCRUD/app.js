//ATTRIBUTE Özelliklerini ekleyip silme güncelleme

const todoInput = document.getElementById("todo");
let element;

element = todoInput;
element = todoInput.classList;

todoInput.classList.add("newClass","newClass2");

element = todoInput;
element = todoInput.placeholder;
element = todoInput.getAttribute("placeholder");
todoInput.setAttribute("placeholder","Yapılacaklar Listesi");
element = todoInput.placeholder;
todoInput.setAttribute("title","Input");
console.log(element);
element = todoInput.hasAttribute("required");
console.log(element);
element = todoInput.hasAttribute("name");
console.log(element);

todoInput.removeAttribute("name");
element = todoInput.hasAttribute("name");
console.log(element);
