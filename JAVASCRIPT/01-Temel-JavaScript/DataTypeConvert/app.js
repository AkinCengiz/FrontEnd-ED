let value;


//Veri Tiplerini String Türüne Dönüştürme

value = 123;
let arrays = [1,2,3,4,5];


let stringValue = String(value);
let stringArray = String(arrays);

console.log(value, typeof value);
console.log(stringValue, typeof stringValue);
console.log(arrays, typeof arrays);
console.log(stringArray, typeof stringArray);


//Veri Tiplerini Number Türüne Çevirme
let values = "123";

let numberValues = Number(values);

console.log(values, typeof values);
console.log(numberValues, typeof numberValues);

values = "3.14";
numberValues = Number(values);

console.log(values, typeof values);
console.log(numberValues, typeof numberValues);

values = "Akın";
numberValues = Number(values);

console.log(values, typeof values);
console.log(numberValues, typeof numberValues);

values = null;
numberValues = Number(values);

console.log(values, typeof values);
console.log(numberValues, typeof numberValues);

let uVal;
numberValues = Number(uVal);

console.log(uVal, typeof uVal);
console.log(numberValues, typeof numberValues);

//Otomatik Dönüştürme

const a = "Hello" + 34;
const b = 34 + "53";
console.log(a, typeof a);
console.log(b, typeof b);
