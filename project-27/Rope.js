class Rope{

	constructor(body1,body2,offsetX,offsetY){
		this.offsetX=offsetX
		this.offsetY=offsetY
		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.offsetX,y:this.offsetY}
		}
		this.rope=constraint.create(options)
		World.add(world,this.rope)
		{
	}

	
	
	   /*this.x=x;
		this.y=y;
		this.ropeWidth=200;
		this.ropeHeight=100;
		this.wallThickness=20;
		this.angle=0;*/	
		
	   /*	this.bottomBody=Bodies.rectangle(this.x, this.y, this.ropeWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.ropeWidth/2, this.y-this.ropeHeight/2, this.wallThickness, this.ropeHeight, {isStatic:true})
		Matter.Body.setAngle(this.leftWallBody, this.angle);*/
		

	   /*Bodies.rectangle=(this.x+this.ropeWidth/2, this.y-this.ropeHeight/2, this.wallThickness, this.ropeHeight, {isStatic:true})
		Matter.rthisightWallBody.Body.setAngle(this.rightWallBody, -1*this.angle);
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);*/
      
       }
	
	display()
      {
			/*var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;*/

			

           /* push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			stroke(255)
			rotate(this.angle)
			rect(0,0,this.wallThickness, this.ropeHeight);
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)
			rect(0,0,this.wallThickness, this.ropeHeight);
			pop()

			push()
			translate(posBottom.x, posBottom.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke("red")
			angleMode(RADIANS)
			fill(255)
			rect(0,0,this.ropeWidth, this.wallThickness);
			pop()*/

			var pointA=this.rope.bodyA.position
			var pointB=this.rope.bodyB.position

			strokeWeight(2);

			var Anchor1X=pointA.X
			var Anchor1Y=pointB.Y

			var Anchor2X=pointB.x+this.offsetX
			var Anchor2Y=pointB.y+this.offsetY

			line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
	  }		
	
}
