var x=5;
var y=250;
var speed=1;
rect(85,250,250,50);

draw= function() {
    background(0, 255, 187);
   ellipse(x,y,40,40); 
   x=x+3;
   y=y-2;
   ellipse(407,50,50,40);
   
  // x go higher y go lower
   x=x+speed;
   rect(205,350,250,50);
   rect(370,175,50,175);
   rect(300,175,50,175);
   rect(300,125,250,50);
   rect(390,70,40,115);
 
};
