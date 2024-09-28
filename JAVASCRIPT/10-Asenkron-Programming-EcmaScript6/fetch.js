function getTextFile(){
    fetch("./fetch.txt")
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

function getJSONFile(){
    fetch("./fetch.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

function getServerAPI(){
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

getTextFile();
getJSONFile();
getServerAPI();