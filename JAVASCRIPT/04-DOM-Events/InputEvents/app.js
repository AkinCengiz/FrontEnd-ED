const filter = document.getElementById("filter");
const btnClear = document.getElementById("clear-todos");
console.log(filter);
console.log(btnClear);

document.addEventListener("DOMContentLoaded",load);

function load(e){
    console.log("Sayfa Yüklendi...");
}

//focus eventi

filter.addEventListener("focus",run);
filter.addEventListener("blur",run);

function run(e){
    console.log(e.type);
};

//paste eventi

filter.addEventListener("paste",textPaste);

function textPaste(e){
    console.log(e.type);
}

//copy eventi
filter.addEventListener("copy", textCopy);
function textCopy(e){
    console.log(e.type);
}

//cut eventi
filter.addEventListener("cut",textCut);
function textCut(e){
    console.log(e.type);
    filter.textContent = "";
}

//select eventi
filter.addEventListener("select",textSelect);
function textSelect(e){
    console.log(e.type);
}