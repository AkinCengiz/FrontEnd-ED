const element = document.querySelector("#clear-todos");

//Element Özellikleri

console.log(element);
console.log(element.id);
console.log(element.className);
console.log(element.classList);
console.log(element.classList[0]);
console.log(element.textContent);
console.log(element.innerHTML);
console.log(element.href);

//Style ve Element Özelliklerini Değiştirme
console.log(element.style);
element.className = "btn btn-primary";
element.style.color = "#000";
element.style.marginLeft = "50px";
element.href = "https://www.google.com.tr";
element.target = "_blank";
element.textContent = "Clear";
element.innerHTML = "<span style='color:white'>SİL TEMİZLE</span>";

const elements = document.querySelectorAll(".list-group-item");
elements.forEach(function(el){
    el.style.color="red";
    el.style.background = "#eee";
});

liElement = document.querySelector("li:nth-child(3)");
console.log(liElement);
liElements = document.querySelectorAll("li:nth-child(even)");
console.log(liElements);

liElements.forEach(function(liEl){
    liEl.style.background = "#888";
    liEl.style.color = "white";
});

console.log(elements);

