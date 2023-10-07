let value;

const firstName = "Akın";
const lastName = "Cengiz";
const langs = "Java, Python, C++";

value = firstName + lastName;
console.log(value);

value = firstName + " " + lastName;
console.log(value);

value += " Beşiktaş";
console.log(value);

//String Metotları

//String Uzunluğunu getirme
value = firstName.length;
console.log(value);

//String değere ekleme yapma
value = firstName.concat(" " + lastName + " Beşiktaş");
console.log(value);

//String değerlerin harflerini büyük ya da küçük harfe dönüştürme
value = firstName.toLowerCase();
console.log(value);
value = lastName.toUpperCase();
console.log(value);
value = firstName.concat(" " + lastName).toUpperCase();
console.log(value);

//String ifadenin karakterlerini getirme
value = firstName[0];
console.log(value);
value = lastName[3];
console.log(value);
value = lastName[5];
console.log(value);
value = lastName[lastName.length-1];
console.log(value);


//IndexOf Metodu -> Verilen karakterin ilk geçtiği indeksi döndürür
value = firstName.indexOf("ı");
console.log(value);
value = lastName.indexOf("n");
console.log(value);
console.log(lastName[value]);

//charAt() -> Verilen indexte bulunan karakteri döndürür
value = firstName.charAt(0);
console.log(value);
value = lastName.charAt(4);
console.log(value);
value = lastName.charAt(lastName.length-1);
console.log(value);


//split() -> Verilen karaktere göre string değerini dizye döndürür
value = langs.split(",");
console.log(value);

//replace(x,y) -> String içerisinde method içerisinde verilen x parametresinin geçtiği değerleri y parametresindeki değerler ile değiştirir

value = langs.replace("Python","CSS");
console.log(value);

//includes() -> String ifadede method içerisinde verilen parametredeki değerin olup olmadığını döndürür
value = langs.includes("Java");
console.log(value);
value = langs.includes("JavaScript");
console.log(value);
