//Değişken Oluşturma

// var a = 20;
// var b = 10;
// var c = 40;

// console.log(a,b,c);

//Primitive Data Types
var a = 10;
console.log(a,typeof a);
var firstname = "Akın";
console.log(firstname,typeof firstname);
var isActive = true;
console.log(isActive, typeof isActive);

var b = null;
console.log(b, typeof b);

var uVar;
console.log(uVar, typeof uVar);


//References Data Types

var numbers = [1,2,3,4,5];
console.log(numbers, typeof numbers);
console.log(numbers[0], typeof numbers[0]);

var person = {
    firstName : "Akın",
    lastName : "CENGİZ",
    age : 42
};
console.log(person,typeof person);

var date = new Date();
console.log(date, typeof date);

var merhaba = function(){
    console.log("Merhaba");
}

console.log(merhaba, typeof merhaba);


//Değer ve Referans Değer Farkı
//Değer Tip
var v1 = 10;
var v2 = v1;
console.log(v1,v2);
v1 = 20;
console.log(v1, v2);

//Referans Tip
var r1 = [1,2,3];
var r2 = r1;
console.log(r1,r2);
r1.push(22);
console.log(r1,r2);