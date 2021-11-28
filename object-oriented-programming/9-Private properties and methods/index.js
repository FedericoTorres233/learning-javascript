function Circle(radius){
    this.radius = radius;

    let defaultLocation = { x:0, y:0 };

    let computeOptimumLocation = function(factor) {
        // ...
    }

    this.draw = function(){
        //let x,y;
        //this.radius = radius;
        //defaultLocation;
        computeOptimumLocation(0.1);

        console.log('draw');
    }
}

const circle = new Circle(10);

circle.draw();