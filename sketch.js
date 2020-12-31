var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52)
  bullet= createSprite(40, 100, 20, 30);
  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=("white");
}

function draw() {
  background(0); 

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}
function hasCollided(bullet1, wall1){
  bRightEdge = bullet1.x+bullet1.width;
  wLeftEdge = wall1.x;
  if(bRightEdge >= wLeftEdge){
        return true
  }
  return false
}

  