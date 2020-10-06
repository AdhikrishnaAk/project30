const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);

  
  ground = new Ground(400,height,800,20)
  box1=new Box(630,369,30,40)
 box2=new Box(660,369,30,40)
 box3=new Box(690,369,30,40)
 box4=new Box(720,369,30,40)
 box5=new Box(750,369,30,40)

 box6=new Box(660,330,30,40)
 box7=new Box(690,330,30,40)
 box8=new Box(720,330,30,40)

 box9=new Box(690,291,30,40)

 polygon=new Polygon(200,100,35,30)
 sling= new SlingShot(polygon.body,{x:200,y:300})
}

function draw() {
  background(255,255,255); 
  Engine.update(engine); 
 
 
ground.display()
box1.display()
box2.display()  
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()

polygon.display()

sling.display()

drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x:mouseX,y:mouseY})
  }
  
     
  
  
  function mouseReleased(){
  sling.fly()
  //gameState="play"
  
  }
  
   function keyPressed(){
       if(keyCode===32){
   sling.attach(polygon.body)
       }
   }
  