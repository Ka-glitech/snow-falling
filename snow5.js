class snow5{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            isStatic:false
           
        }
        this.visibility = 225;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        snow5.addImage(snow5Img)
        World.add(world, this.body);
        
      }
     
      display(){
        
        
      
    }
}