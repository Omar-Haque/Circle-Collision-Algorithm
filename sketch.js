var fixedCircle, movingCircle;
//c is the radius 
var c;
function setup() {

  //Create a canvas
  createCanvas(1600, 800);

  //Create the fixedCircle
  fixedCircle = createSprite(600, 400, 65, 72);
  fixedCircle.radius = c;

  //Create the movingCircle
  movingCircle = createSprite(900, 200, 65, 72);
  movingCircle.radius = c;
  getRadius(65, 72);
}

function draw() {
  
  //Set the background colour to black
  background(0);

  //Make the movingCircle move according to the mouse cursor
  movingCircle.x = mouseX;
  movingCircle.y = mouseY;
  
  //Set the color of the circles to green
  fixedCircle.shapeColor = "green";
  movingCircle.shapeColor = "green";

  fixedCircle.debug = true;
  movingCircle.debug = true;
  
  //Set the collider for fixed and moving circle
  fixedCircle.setCollider("circle", 0, 0, 50);
  movingCircle.setCollider("circle", 0, 0, 50);

  isTouching(movingCircle, fixedCircle);

  //Display all the sprites on the screen
  drawSprites();
}