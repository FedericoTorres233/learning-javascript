
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("draw");
    }
};
const another = new Circle(1);

console.log(Circle.name);
console.log(Circle.length);
console.log(Circle.constructor);

const Circle1 = new Function("radius",`
    this.radius = radius;
    this.draw = function(){
        console.log("draw");
    }
    `);

const circle1 = new Circle1(3);
console.log(circle1);

/*let circle4 = Circle1.apply({}, [10]);
console.log(circle4);*/