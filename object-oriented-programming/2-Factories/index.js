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
circle.draw();