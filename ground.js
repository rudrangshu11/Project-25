class Ground {
    constructor(){
        var options_ground = {
            isStatic : true,
            restitution : 0
        }
        this.body = Bodies.rectangle(600,650,1200,10,options_ground);
        World.add(world, this.body)
    }
    display(){
        rectMode(CENTER)
        fill('Coral');
        rect(600,650,1200,10);
    }
}