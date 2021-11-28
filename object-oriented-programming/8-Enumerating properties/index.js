
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("draw");
    }
};

const circle = new Circle(10);


console.log('Iterating the keys:');
// Iterating the keys
for(let key in circle){
    console.log(key);
};

console.log('Iterating the keys and the values:');
// Iterating the values
for(let key in circle){
    console.log(key, circle[key]);
};

console.log('Iterating only properties:');
// Iterating only properties
for(let key in circle){
    if(typeof circle[key] !== 'function')
        console.log(key, circle[key]);
};

console.log('Get all they keys in an object:');
// Get all they keys in an object
const keys = Object.keys(circle);
console.log(keys);

console.log('To know if a property or method is in an object');
// To know if a property or method is in an object
if('radius' in circle)
    console.log('Circle has a radius');
    else
    console.log('Circle has not radius');