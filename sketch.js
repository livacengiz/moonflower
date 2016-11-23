var x = 0;
var y = 0;
var angle = 0;
var radius = 180;

function setup() {
  createCanvas(500, 500);
  frameRate(60);
}
  //Moon Flower
function draw() {

  noStroke();
  x = sin(angle)*radius;
  y = cos(angle)*radius;
  fill(255,180,0);
  stroke(20)
  translate(width/2, height/2);
  rect(x,y, 10, 10)
  
  if (frameCount%20==0) {
    radius = radius-2;    
  }
  angle = angle + radians(137.5);

  if (radius < 4){
    noLoop();
  }
}