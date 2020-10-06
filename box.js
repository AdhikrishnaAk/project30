class Box {
    constructor (x,y,w,h){
      var options={
    isStatic:true,
    
    //     restitution:1,
    //  density:1,
    //  friction:0.3
      }  
      this.body=Bodies.rectangle(x,y,w,h,options)
        this.width=w;
        this.height=h;
        World.add(world,this.body) 
    }

  display(){
      
     push()
   
  if(this.body.speed < 1){
    var angle=this.body.angle
    translate(this.body.position.x,this.body.position.y)
    rotate(angle)
   rectMode(CENTER)
   fill("#F75F20")
   rect(0,0,this.width,this.height)
   }
   else{
     World.remove(world, this.body);
    
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     rect( this.body.position.x, this.body.position.y,this.width, this.height);
     ;
   }
  pop() 
}

}