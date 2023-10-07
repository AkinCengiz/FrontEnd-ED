let value;
function printOfValue(number){
    console.log(number);
}

const value1 = 10;
const value2 = 4;

//Aritmetik Operatörler
value = value1 + value2;
printOfValue(value);
value = value1 - value2;
printOfValue(value);
value = value1 * value2;
printOfValue(value);
value = value / value2;
printOfValue(value);
value = value1 % value2;
printOfValue(value);

//Math Objects
value = Math.PI;
printOfValue(value);
value = Math.E;
printOfValue(value);

//Math.round() -> En yakın tam sayıya yuvarlama
value = Math.round(3.6);
printOfValue(value);
value = Math.round(3.5);
printOfValue(value);
value = Math.round(3.2);
printOfValue(value);

//Math.ceil() -> Yukarı yuvarlama
value = Math.ceil(3.7);
printOfValue(value);
value = Math.ceil(3.5);
printOfValue(value);
value = Math.ceil(3.2);
printOfValue(value);

//Math.floor() -> Aşağı Yuvarlama
value = Math.floor(3.2);
printOfValue(value);
value = Math.floor(3.5);
printOfValue(value);
value = Math.floor(3.9);
printOfValue(value);


//Karekök ve Üs Alma Math.sqrt() ve Math.pow(x,y)

value = Math.sqrt(25);
printOfValue(value);
value = Math.sqrt(64);
printOfValue(value);

value = Math.pow(2,3);
printOfValue(value);
value = Math.pow(7,5);
printOfValue(value);

//Math.abs()  -> Mutlak Değer Alma


value = Math.abs(-25);
printOfValue(value);
value = Math.abs(-3);
printOfValue(value);
value = Math.abs(25);
printOfValue(value);

//Math.max(), Math.min() -> Maksimum ve Minimum Değeri bulma

value = Math.max(5,3,9,-25,7);
printOfValue(value);
value = Math.min(5,3,9,-25,7);
printOfValue(value);

//Math.random() -> Rastgele Sayı Üretme
value = Math.random();
printOfValue(value);
value = Math.random() * 20;
printOfValue(value);
value = Math.ceil(Math.random() * 20);
printOfValue(value);
value = Math.floor(Math.random() * 20 + 1);
printOfValue(value);