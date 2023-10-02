//Var

var a;
a = 20;

var fullName = "Akın CENGİZ";
console.log(a);
console.log(fullName);

//Let 

let firstName = "Akın";
console.log(firstName);
firstName = "Abdül Akın";
console.log(firstName);
// var firstname = "Akın"; -- Let ile tanımlanan değişken tekrar oluşturulamaz
// let firstName = "Akin"; -- Let ile tanımlanan değişken tekrar oluşturulamaz

let number1, number2;
number1 = 10;
number2 = 20;

console.log(number1 + number2);

//Const
const lname = "Akın CENGİZ";
// lname = "Cengiz"; const ile tanımlanan değişkenin değeri değiştirilemez...
console.log(lname);

// const cValue;
// cValue = 20;  --Const ile tanımlanan değişkenlerin değeri tanımlandığı satırda verilmeli
const cValue = 20;
console.log(cValue);

const numbers = [1,2,3,4];
console.log(numbers);
// numbers = [4,5,6,7]; //const ile tanımlanan referans değerlere tekrar değer atanamaz. Ancak ekleme ve silme yapılabilir.
numbers.push(22);

console.log(numbers);