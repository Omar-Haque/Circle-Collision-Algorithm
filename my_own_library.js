function isTouching(circle1, circle2){
 
    if(circle1.c + circle2.c === circle1.x + circle2.x){
        circle1.shapeColor = "blue";
        circle2.shapeColor = "blue";
    }
    
}
// function isTouching(circle1, circle2){
 
//     if(circle1.x - circle2.x < 140 
//         && circle1.x - circle2.x > -140 
//         && circle1.y - circle2.y < 140 
//         && circle1.y - circle2.y > -140){
//         circle1.shapeColor = "blue";
//         circle2.shapeColor = "blue";
//     }
    
//}

function getRadius(a, b){
    c = sqrt(a*a + b*b);
    c = c / 2;
    console.log(c);
}