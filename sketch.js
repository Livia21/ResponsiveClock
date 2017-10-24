var colorList = ['#d8dbe1',
                 '#91c5ad',
                 '#104b93',
                 '#009f6f'];

  var color1 = colorList[0];
  var color2 = colorList[1];
  var color3 = colorList[2];
  var color4 = colorList[3];
                 
function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(color(color1));
  if(width>height){
    g=height;
  }
  else {
  g=width;
  }
  translate(width/2,height/2);
  clockHand(hour()-12,194*g/600,12,16*g/600); 
  clockHand(minute(),127*g/600,60,10*g/600);
  clockHand(second(),75*g/600,60,5*g/600);
  
}

function clockHand(timevalue,radius,range,r) {
  push();
  fill(color2);
  noStroke();
  for(var angle = 360/range; angle <= 360; angle+= 360/range) {
   ellipse(radius*cos(angle),radius*sin(angle),r,r);  
  }
  fill(color3);
  var a = map(timevalue,0,range,-90,270);
  ellipse(radius*cos(a),radius*sin(a),r,r);
  fill(color4);
  for(var b = -90; b < a - 1; b+= 360/range){
    ellipse(radius*cos(b),radius*sin(b),r,r);
  }
  pop();
  
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
