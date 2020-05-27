var wall,car;
var speed,weight;





function setup() {
  createCanvas(1600,800);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1000,200,60,height/2);
  wall.shapeColor = "black";
  car.velocityX = 5;

}

function draw() {
  background(255,255,255); 
  if(wall.x-car.x<=wall.width/2+car.width/2)
  {
  var deformation=(0.5* weight* speed* speed) /22500;
  
      if(deformation<=100)
      {
      car.shapeColor = "green";
      }

      else if(deformation >100 && deformation<=180)
      {
      car.shapeColor = "blue";
      }

      else if(deformation>180)
      {
      car.shapeColor = "red";
      }
}
  drawSprites();
}