class Polygon{
    constructor(x,y,w,h){
        this.body=Bodies.circle(x,y,w,h)
       this.width=w
       this.height=h
      this.image=loadImage("polygon.png")
       World.add(world,this.body)
    }
 display(){
    push()
    translate(this.body.position.x,this.body.position.y)
      
   // translate(this.body.position.x, this.body.position.y);
    
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
 
  pop() 

 }
     

}