function getData(data){//Promise döndüren fonksiyon
    return new Promise((resolve,reject) => {
        setTimeout(function(){
            //resolve("Olumlu sonuç...");
            reject("Olumsuz sonuç...")
        },5000);
    });
}

getData("Merhaba").then((res) => console.log(res)).catch((err) => console.error(err));


function getData2(data){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(typeof data === "string"){
                resolve(data);
            }else{
                reject("Lütfen string bir değer giriniz...");
            }
        },5000);
    });
}

getData2(12).then(res => console.log(res)).catch(err => console.log(err));


function added(number){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(typeof number === "number"){
                resolve(number + 2);
            }else{
                reject("Lütfen bir sayı giriniz...")
            }
        }, 3000);
    });
}
added(5).then(res => {console.log(res);return res +2;}).then(res => console.log(res)).catch(err => console.error(err));