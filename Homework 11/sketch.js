  var x = 50;
  var y = 500;
  var diameter = 25;
  var shape1X = 30;
  var shape1Y = 50;
  var shape1XSpeed;
  var shape1YSpeed;
  var shape2X = 300;
  var shape2Y = 50;
  var shape2XSpeed;
  var shape2YSpeed;
  var mousex;
  var mousey;
  function setup()
  {
    createCanvas(800,600);
  }
    function draw()
  {
    
        background(83,24,67);
    
        if(keyIsDown(68))
    {
          x+=5;
    }
        if(keyIsDown(65))
    {
          x-=5;
    }
        if(keyIsDown(83))
    {
          y+=5;
    }
        if(keyIsDown(87))
    {
          y-=5;
    }
    
        fill(300)
        circle(x,y,50);
    
    textSize(16);
    text("FINISH", width-60,height/2-280)
    
     if(x > width && y > width/2-380)
    {
        fill(400);
        stroke(5);
        textSize(26);
        text("You Win! :D", width/2-50, height/2-50);
    } 
    
        fill(20,97,90);
        circle(shape1X, shape1Y, 25);

    
     shape1XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shape1YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    
    shape1X += shape1XSpeed;
    shape1Y += shape1YSpeed;

    if(shape1X > width)
    {
        shape1X = 0;
    }
    if(shape1X < 0)
    {
        shape1X = width;
    }
    if(shape1Y > height)
    {
        shape1Y = 0;
    }
    if(shape1Y < 0)
    {
        shape1Y = height;
    }
    
    fill(100,150,200)
    circle (shape2X, shape2Y, 75)
    
     shape2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shape2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    
    shape2X += shape2XSpeed;
    shape2Y += shape2YSpeed;

    if(shape2X > width)
    {
        shape2X = 0;
    }
    if(shape2X < 0)
    {
        shape2X = width;
    }
    if(shape2Y > height)
    {
        shape2Y = 0;
    }
    if(shape2Y < 0)
    {
        shape2Y = height;
    }
    
  fill(120,200,200);
  circle(mousex, mousey, 100);
  }

function mouseClicked()
{
    mousex = mouseX;
    mousey = mouseY;
}