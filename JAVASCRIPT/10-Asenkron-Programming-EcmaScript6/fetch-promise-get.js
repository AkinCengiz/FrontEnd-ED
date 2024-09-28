class Request{
    get(url){

        return new Promise((resolve,reject) => {
            fetch(url).then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
        
    }
    post(url,data){
        return new Promise((resolve,reject) => {
            fetch(url,{
                method : "POST",
                body : JSON.stringify(data),
                headers : {"Content-type" : "application/json; charset=UTF-8"}
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }
    put(url,data){
        return new Promise((resolve,reject) => {
            fetch(url,{
                method : "PUT",
                body : JSON.stringify(data),
                headers : { "Content-type" : "application/json; charset=UTF-8"}
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });        
    }
    delete(url){
        return new Promise((resolve,reject) => {
            fetch(url,{method : "DELETE"})
            .then(response => resolve("Veri silme işlemi başarılı..."))
            .catch(err => console.error(err));
        });
    }
}

const reguest = new Request();
let albums;
reguest.get("https://jsonplaceholder.typicode.com/albums")
.then(data => { albums = data; console.log(albums)})
.catch(err => console.error(err));
console.log("Asenkron olarak veri gelmeden önce çalışan data : ", albums);

reguest.post("https://jsonplaceholder.typicode.com/albums",{userId:1,title:"Deneme Albümü"})
.then(response => console.log(response))
.catch(err => console.error(err));

reguest.put("https://jsonplaceholder.typicode.com/albums/1",{"userId": 1,"title": "Of Aman"})
.then(response => console.log(response))
.catch(err => console.error(err));

reguest.delete("https://jsonplaceholder.typicode.com/albums/1")
.then(response => console.log(response))
.catch(err => console.error(err));

setTimeout(()=>{reguest.get("https://jsonplaceholder.typicode.com/albums")
.then(data => { albums = data; console.log(albums)})
.catch(err => console.error(err))},5000);