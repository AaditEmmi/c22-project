
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
var Engine = Matter.Engine,
    World = Matter.World,
     Bodies = Matter.Bodies;
var engine;
var world;
var boxes = [];
var ground;
var gSlider;
 
function setup() {
    createCanvas(400, 400);

    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;
    // A slider is already created for you here. This slider will dictate the gravity of the world
    Engine.run(engine);
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 
    // Create a ground rectangle that would hold all the boxes and add it to the world.
    ground = new Ground(200,height,50,20);

function mousePressed() {
    if (mouseY < 350) {
        // Every time a mouse press occures create a new box.
      boxes.push(new Box(mouseX,mouseY,random(10,50),random(10,50)))

    }
}
 
function draw() {
    // Draw all the elements including the slider that 

    background("black");
    // This is the value of your gravity. You can optionally show it to the viewer.
    var fVal = gSlider.value();
 
    // Use a for loop to show all the boxes
    for (var i =0;i<boxes.length;i=i+1){
         boxes[i].show();
    }
    ground.display();
     textSize(15);
     text("Gravity"+ fval,160,381);
}
         
// You can either create a file for the class Box or build a simple function that creates one box at a time.
// I have gone for the second option.
function Box(x, y, w, h, options) {

    // add options such as friction and restitution. Experiment with the values
    var options = {
        restituion : 0.5,
        friction: 0.9,
        density : 1.0
    }
 
    // create your box using the function arguments
    this.body= Bodies.rectangle(x,y,w,h,options);
    this.width= w;
    this.height= h;
    World.add(world,this.body);

    // Create a show method which will draw the box every time it is called inside the draw method.    
    // remember to push and pop.
    this.show = function () {
             var angle= this.body.angle;
             var pos= this.body.position;
             push();
             translate(pos.x,pos.y);
             rotate (angle);
             fill("blue");
             rectMode(CENTER);
             rect(0,0,this.w,this.h);
             pop();      
    }

};

};

