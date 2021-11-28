// Factory function
function createCircle(radius){
    return {
        radius, //Same as radius: radius,
        draw: function(){
            console.log("draws a cirlce of radius " + radius);
        }
    };
}

const circle = createCircle(2);

// Constructor function

function Circle(radius){
    console.log("this", this);
    this.radius = radius;
    this.draw = function(){
        console.log("draw");
    }
};

const another = new Circle(1);
/*              ^
                |
    Creates an empty Object*/