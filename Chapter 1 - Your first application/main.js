$(document).ready(function() {
    'use strict';
        console.log('main.js loaded');
        paper.install(window);
        paper.setup(document.getElementById('mainCanvas'));

        var c;
        for(var x=50; x<400; x+=50) {
           for(var y=50; y<400; y+=50) {
            c = Shape.Circle(x, y, 20);
            c.fillColor = 'cyan';
           }
        }

        /*
        var tool = new Tool();
        tool.onMouseDown = function(event) {
            var c = Shape.Circle(event.point.x, event.point.y, 5);
            c.fillColor = 'blue';
        };
        */

        var c = Shape.Circle(200, 200, 160);
        c.fillColor = 'black';
        var text = new PointText(200, 200);
        text.justification = 'center';
        text.fillColor = 'white';
        text.fontSize = 30;
        text.content = 'JavazZzzZzZzzZzzcript';

        var owo = new Tool();
        owo.onMouseDrag = function(event){
            var d = Shape.Circle(event.point.x, event.point.y, 5); // or (event.point, 5)
            d.fillColor = 'red';
        }

        paper.view.draw();
});