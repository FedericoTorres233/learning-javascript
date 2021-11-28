const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function(){
        console.log("draw");
    }
};

console.log(circle.radius);
console.log(circle.location);
circle.draw();