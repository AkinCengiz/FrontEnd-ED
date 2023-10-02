//KLAVYE EVENTLERİ


// 1 --- keypress ==> Klavyede herhangi bir tuşa bastığımızda çalışan event. (SADECE HARFLER VE SAYILAR KABUL EDİLİYOR)
document.addEventListener("keypress",run);

function run(e){
    console.log(e.which);
    console.log(e.key);
    //console.log("Naber");
}

//2 --- keydown ==> Klavyede herhangi bir tuşa bastığımızda çalışan event. (Tuşa bastığımız anda tetiklenir...)

document.addEventListener("keydown",run2);

function run2(e){
    console.log(e.which);
    console.log(e.key);
}

//3 --- keyup ==> Klavyede bir tuşa basılıp bırakıldığı anda çalışan event.

document.addEventListener("keyup",run3);

function run3(e){
    console.log(e.which);
    console.log(e.key);
}

const header = document.querySelector(".card-header");
console.log(header)
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup",changeText);

function changeText(e){
    header.textContent = e.target.value;
}
console.log(header);