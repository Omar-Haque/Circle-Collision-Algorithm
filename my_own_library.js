function isTouching(circle1, circle2){
    if(sq(circle1.x - circle2.x) + sq(circle1.y - circle2.y) < 10000){
        circle1.shapeColor = "red";
        circle2.shapeColor = "red";
    }
}
