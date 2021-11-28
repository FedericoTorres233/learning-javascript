// Son variables independientes; y1 solo copia el valor de x1
let x1 = 10;
let y1 = x1;

x1 = 20;

console.log(x1);
console.log(y1);


console.log("");


// Se guarda la referencia a la que apunta la variable
let x2 = {value: 10};
let y2 = x2;

x2.value = 20;

console.log(x2);
console.log(y2);







console.log("");







// Ejemplo con una funcion
let number = 10;

function increase(number){
    number++;
}

increase(number);
console.log(number);


console.log("");


let obj = {value: 10};

function increase(obj){
    obj.value++;
}

increase(obj);
console.log(obj);