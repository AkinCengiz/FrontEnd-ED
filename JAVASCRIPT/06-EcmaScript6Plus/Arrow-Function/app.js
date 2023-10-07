const merhaba = function(){
    console.log("Merhaba AKIN...");
}

merhaba();

//ARROW FUNTION

const merhabaArrow = () => {
    console.log("Arrow AKIN...");
}

merhabaArrow();

const merhabaParamArrow = (firstName) => {
    console.log(`Merhaba parametreli ${firstName}`);
};

merhabaParamArrow("Akın CENGİZ...");

//Dönüş değeri olan fonksiyonlar

const cube = function(x){
    return x * x * x;
}

console.log(cube(5));

const cubeArrow = (x) => {
    return x * x * x;
}

const cubeArrowLine = x => x * x * x;

console.log(cubeArrow(4));
console.log(cubeArrowLine(3));