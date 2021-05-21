class SlingShot {
    constructor (bodyX,pointY) {
         var options = {
            bodyA : bodyX,
            pointB : pointY,
            stiffness : 0.04,
            length : 1
        }
        
        this.slingShot = new Constraint.create (options);
        World.add(world,this.slingShot);
    }

    display () {

        if(this.slingShot.bodyA != null){
            var point1 = this.slingShot.bodyA.position;
            var point2 =  this.slingShot.pointB;

            push();
            strokeWeight(4);
            stroke(42,28,8);
            line(point1.x,point1.y,point2.x,point2.y);
            pop();

            
          }
        }

    fly()  {

     this.slingShot.bodyA = null;

    }

    attach(body) {

        this.slingShot.bodyA = body;
    }
}