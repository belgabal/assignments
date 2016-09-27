var x=5;
var y=250;
var speed=1;
rect(85,250,250,50);

draw= function() {
    background(0, 255, 187);
   ellipse(x,y,40,40); 
   x=x+2;
   y=y+-3;
  if (x>50) {y=200;}  
  // x go higher y go lower
   x=x+speed;
   rect(85,250,250,50);
 
};
