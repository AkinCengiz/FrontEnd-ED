const filterInput = document.getElementById("filter");
const todoForm = document.getElementById("todo-form");

//1. YÖNTEM
filterInput.onfocus = function(){
    console.log("Nasılsın...");
};

//2. YÖNTEM
filterInput.addEventListener("focus",function(e){
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.placeholder);
    console.log(e.target.className);
    console.log("Naber");
});
console.log(todoForm);

//1. YÖNTEM
todoForm.addEventListener("submit",function(e){
    console.log("Submit --------------");
    e.preventDefault();
})

//2. YÖNTEM
todoForm.addEventListener("submit",submitForm);

function submitForm(e){
    console.log("Submit Eventi çalıştı");
    e.preventDefault();
};

console.log(filterInput);