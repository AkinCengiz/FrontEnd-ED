let value;
const programmer = {
    firstname : "Akın",
    lastname : "Cengiz",
    age : 42,
    email : "akincengiz@msn.com",
    langs : ["Python","C#","Java","JavaScript"],
    address : {
        city : "İstanbul",
        town : "İstanbul",
        district : "Göktürk",
        neighbourhood : "Merkez",
        street : "2. Çayır Sokak",
        buildNumber : 5,
        apartment : 5
    },

    work : function(){
        console.log("Programcı çalışıyor");
    }
};

value = programmer;
console.log(value);

value = programmer.email;
console.log(value);
value = programmer.langs;
console.log(value);
value = programmer.address.city;

programmer.work();

const programmers = [
    {firstname : "Serap",lastname:"Cengiz", age:45},
    {firstname : "Cansu", lastname:"Cengiz", age:27}
];
value = programmers;
console.log(value);

console.log(value);