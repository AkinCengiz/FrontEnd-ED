//Yeni Element Oluşturma
//<a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a> 
const newLink = document.createElement("a");
const cardBody = document.getElementsByClassName("card-body")[1];

newLink.id="clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com.tr";
newLink.target = "_blank";

//Text Content ile etiket ekleme (Elementin içeriğini temizleyerek metin eklenir)
//newLink.textContent = "Farklı sayfaya Git";
//innerText ile etiket ekleme
newLink.appendChild(document.createTextNode("Farklı Sayfaya Git"));
cardBody.appendChild(newLink);

console.log(newLink);
console.log(cardBody);