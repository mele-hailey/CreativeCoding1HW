var headX = 250;
var headY = 100;
var headDirection = 1;

var eyeX = 200;
var eyeY = 185;
var eyeDirection = 3;

var x = 100;
var y = 200;
var diameter = 50;

var size = 25;
var count = 0;
var sizeDirection = 2;

function setup() {
    createCanvas(400, 400);
  }
  
  function draw() 
{
    background(220);
    textSize (20)
    text('By: Lee Mele',270,500)
    circle (headX,headY,200);
    headX+=headDirection;
    if (headX >= 300 || headX <= 100)
      {
        headDirection *= -1;
      }
  
    rect (125,eyeY,60,50);
    eyeY += eyeDirection;
    if (eyeY <= 0 || eyeY >= 360)
      {
        eyeDirection *= -1;
      }
  
    rect (215,eyeY,60,50);
    line (185,eyeY,215,eyeY);
    strokeWeight(10);
    point (headX,headX);
   triangle (headX,400,headX,305,headY,400);
    line (155,eyeY,100,300);
    line (240,eyeY,290,300);
  
  textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
  text('Simple Self Portrait',100,50);
}