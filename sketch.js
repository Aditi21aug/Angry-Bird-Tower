const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var Pig1,Pig2;
var Log1,Log2,Log3,Log4;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,380,100,100);
    
    box2 = new Box(1000,380,100,100);
    box3 = new Box(700,320,100,100);
    
    box4 = new Box(1000,320,100,100);
    ground = new Ground(600,height,1200,20)

    Pig1 = new Pig(820,380,70,70);

    Log1 = new Log(850,350,20,400,PI/2);
    Pig2 = new Pig(820,320,70,70);

    Log2 = new Log(850,300,20,400,PI/2);

    box5 = new Box(850,280,100,100);

    Log3 = new Log(830,280,20,150,PI/7);
    Log4 = new Log(900,280,20,150,-PI/7);

    bird = new Bird(100,100,50,50);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    
    box1.display();
    box2.display();
    Pig1.display();
    ground.display();
    Log1.display();
    box3.display();
    box4.display();
    Pig2.display();
    Log2.display();
    box5.display();
    Log3.display();
    Log4.display();
    bird.display();
}