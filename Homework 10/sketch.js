function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    text ('Simple Self Portrait',150,50);
    text ('By: Lee Mele', 10,390)
    circle (200,200,200);
    rect (125,175,60,50);
    rect (215,175,60,50);
    line (185,200,215,200);
    strokeWeight(10);
    point (200,240);
    triangle (125,400,200,305,275,400);
    line (155,350,100,300);
    line (240,350,290,300)
  }