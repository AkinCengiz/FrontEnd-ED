//SESSION STORAGE - Key - Value

//Buttonları Seçmek

const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

//INPUT ları seçmek
const addkey = document.querySelector("#addkey");
const addvalue = document.querySelector("#addvalue");
const deletekey = document.querySelector("#deletekey");

add.addEventListener("click",addItem);
del.addEventListener("click",deleteItem);
clear.addEventListener("click",clearItems);

function addItem(e){
    sessionStorage.setItem(addkey.value,addvalue.value);
    addkey.value = "";
    addvalue.value = "";
    addkey.focus();
}
function deleteItem(e){
    sessionStorage.removeItem(deletekey.value);
    deletekey.value = "";
    deletekey.focus();
}
function clearItems(e){
    sessionStorage.clear();
    addkey.focus();
}