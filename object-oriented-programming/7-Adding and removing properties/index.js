
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("draw");
    }
};

const circle = new Circle(10);


//Add property
circle.location = { x: 10};
circle['location2'] = { y: 400};

console.log(circle);

//Remove property

delete circle['location'];
delete circle.location2;

console.log(circle);