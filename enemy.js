class Enemy{
    constructor(x,y,width,height){
    var options={
        isStatic:true,
   restitution:0,
   friction:2,

    }
    this.x=x;
    this.y=y;
    this.height=height;
    this.width=width;
    this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
    this.image=loadImage("images/enemy.png")
    World.add(world,this.body);
    }


    display(){
        var pos=this.body.position;
// rectMode(CENTER);
 //rect(pos.x,pos.y,this.width,this.height);
 imageMode(CENTER);
image(this.image,pos.x,pos.y,this.width,this.height);

    }
    
}