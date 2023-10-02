let value;

const now = new Date(); // Şu anki zaman

value = now;
console.log(value);

const birthday = new Date("08-24-1981 13:15:00");

const fbd = new Date("1951-05-26 19:03:00");

value = birthday;
console.log(value);
value = fbd;
console.log(value);

//Tarih bilgilerini getiren metotlar

value = fbd.getMonth(); // Ay bilgisini 0 dan başlayarak getirir
console.log(value);
value = fbd.getDate(); // Gün Bilgisini getirir
console.log(value);
value = fbd.getDay(); // Haftanın kaçıncı günü olduğunu 0 dan başlayarak getirir
console.log(value);

value = fbd.getHours(); // saat bilgisini getirir
console.log(value);
value = fbd.getMinutes(); // dakika bilgisini getirir
console.log(value);
value = fbd.getSeconds(); //saniye bilgisini getirir
console.log(value);
value = fbd.getMilliseconds(); // milisaniye bilgisini getirir
console.log(value);

// Tarih değerlerini değiştirme

now.setMonth(7);
now.setDate(24);
now.setFullYear(1981);
now.setHours(19);
now.setMinutes(3);
now.setSeconds(19);

value = now;
console.log(value);







console.log(value);