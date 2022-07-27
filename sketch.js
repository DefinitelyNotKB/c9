var ball
function setup() {
  createCanvas(400,400);
  ball = createSprite (20,20,4,5)
  ball.velocityX=5
  ball.velocityY=5
}

function draw() 
{
  background(30);
drawSprites()
}