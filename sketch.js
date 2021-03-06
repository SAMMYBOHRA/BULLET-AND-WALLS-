var bullet, wall;
var speed, weight;
var thickness;


function setup() {
  createCanvas(1600,400);


  bullet = createSprite(50, 200, 50, 50);
  wall = createSprite (1200, 200, thickness,height/2);
  fill(wall,80,80,80);
  

  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83);

  bullet.velocityX = speed;
  
  
}

function draw() {

  background("black");  

  if (wall.x-bullet.x < (bullet.width+wall.width)/2) {
  bullet.velocityX=0;
  var deformation=0.5 * weight * speed * speed/22509;
  if (deformation>180) {
  bullet.shapeColor = "red";
  }
  if (deformation<180 && deformation>100) {
  bullet.shapeColor = "yellow";
  }
  if (deformation<100) {
  bullet.shapeColor = "green";
  }
} 



  drawSprites();
}