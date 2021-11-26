class Polygon{
    constructor(x,y){
        this.image = loadImage("polygon.png");  

      polygon = Bodies.circle(50,200,20)
      World.add(world,polygon)
    }

      display(){
        var pos =this.body.position;
        imageMode(CENTER);
        fill("blue");
        image(polygon_img,polygon.position.x,polygon.position.y,40,40)
      }
}

