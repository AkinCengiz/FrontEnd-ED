let value;
const numbers = [43,56,33,23,44,35,5];
const numbers2 = new Array(1,2,3,4,5,6,7);

const langs = ["Python","Java","C++","JavaScript"];

const mix = ["Merhaba", 22, null, undefined,3.14];

value = numbers.length;
console.log(value);

value = numbers[0];
console.log(value);

value = numbers[2];
console.log(value);

value = numbers[numbers.length-1];
console.log(value);

//Dizinin belirli indeksinde bulunan değeri değiştirme
numbers[0] = 22;
value = numbers[0];
console.log(value);

//indexOf() -> Dizi içerisinde bir değerin olup olmadığını ve varsa kaçıncı indekste olduğunu döndürür
value = numbers.indexOf(35);
console.log(value);
value = numbers.indexOf(34);
console.log(value);

//push() -> Dizinin sonuna eleman eklemek için kullanılır
numbers.push(1903);
numbers.push(2000);
value = numbers;
console.log(value);

//unshift() -> Dizinin en başına eleman ekleme
numbers.unshift(1923);
numbers.unshift(9999);
value = numbers;
console.log(value);

//pop() -> Dizinin Sonunda bulunan elemanı silme
numbers.push(2000);
value = numbers;
console.log(value);
numbers.pop();
console.log(value);

// shift() -> Dizinin ilk elemanını silme
numbers.shift();
console.log(value);

// splice(x,y) -> Dizinin x inci indeksiden başlayarak y kadar elemanı diziden siler.
numbers.splice(2,3);
console.log(value);
//splice(x,y,...value) -> Dizinin x inci indeksinden başlayarak y kadar elemanı siler ve ...value değerlerini ekler.
numbers.splice(2,0,17,50,54);
console.log(value);


//reverse() -> Dizinin elemanlarını tersten sıralar
value = numbers.reverse();
console.log(value);

//sort() -> Dizinin elemanlarını küçükten büyüğe sıralar ancak ilk basamak değerine göre kontrol eder ve ikinci basamak değerleri bundan etkilenmez
value = numbers.sort();
console.log(value);
//sort(function(x,y){}) şeklinde içinde fonksiyon tanımlanarak kullanılırsa tüm elemanları küçükten büyüğe ya da büyükten küçüğe sıralar
value = numbers.sort(function(x,y){//Küçükten büyüğe
    return (x-y);
});
console.log(value);

value = numbers.sort(function(x,y){//büyükten küçüğe
    return y-x;
});
console.log(value);



console.log(value);