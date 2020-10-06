class SlingShot{
    constructor(a,b){
    
    var options={
        bodyA:a,
        pointB:b,
        length:10,
        stiffness:0.04
    }
    
    
    this.pointB=b
    
    // this.sling1=loadImage("sprites/sling1.png")
    // this.sling2=loadImage("sprites/sling2.png")
    // this.sling3=loadImage("sprites/sling3.png")
    
      this.chains=Matter.Constraint.create(options)
      World.add(world,this.chains)
    }
    display(){
     
    
    
    
    
    // image(this.sling1,200,20)
    // image(this.sling2,170,20)
    
        if(this.chains.bodyA){
          var pointA=this.chains.bodyA.position
          
          stroke("#301608")
         
          if(pointA.x<220){
            strokeWeight(7) 
            line(pointA.x-20,pointA.y,this.pointB.x-10,this.pointB.y)
            line(pointA.x-20,pointA.y,this.pointB.x+30,this.pointB.y-2)
           // image(this.sling3,pointA.x-20,pointA.y-10,15,30)
          }else{
            strokeWeight(3) 
            line(pointA.x+25,pointA.y,this.pointB.x-10,this.pointB.y)
            line(pointA.x+25,pointA.y,this.pointB.x+30,this.pointB.y-2)
            //image(this.sling3,pointA.x+25,pointA.y-10,15,30)
          }
    
         
          
        }
    
         
    
    }
    
    fly(){
      this.chains.bodyA=null
      
    }
    attach(b){
      this.chains.bodyA=b
    }
    
    }