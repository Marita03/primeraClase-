var d;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(180,0,0);
 // los palitos paran lo que se esta haciendo frameRate(2)
} 

function draw() {
  d=random(10-100);
  noStroke();
  fill(200,200,200);
ellipse(mouseX,mouseY,d,d);
} 
