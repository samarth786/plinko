const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var divisions = [];
var patricle = [];
var pliko = [];
var divisionHeight = 300;

function preload() {
}

function setup(){
createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(240,800,480,20);
    
    
}    
function draw(){
    background(0);

    ground.display();   
  r();
  p();
}



function r(){
    for( var i =0; i<=480 ; i = i+80 ) {
        divisions.push(new Groud(i, 800-divisionHeight/2, 10, divisionHeight));
        divisions[0].display();
        divisions.push(new Groud(i+160, 800-divisionHeight/2, 10, divisionHeight));
        divisions[1].display();
        divisions.push(new Groud(i+80, 800-divisionHeight/2, 10, divisionHeight));
        divisions[2].display();
        divisions.push(new Groud(i+240, 800-divisionHeight/2, 10, divisionHeight));
        divisions[3].display();
        divisions.push(new Groud(i+320, 800-divisionHeight/2, 10, divisionHeight));
        divisions[4].display();
        divisions.push(new Groud(i+400, 800-divisionHeight/2, 10, divisionHeight));
        divisions[5].display();
        divisions.push(new Groud(i+475, 800-divisionHeight/2, 10, divisionHeight));
        divisions[6].display();
        
      
        }

}

function p(){
    for( var j =40; j<=480 ; j = j + 50 ) {
        pliko.push(new plinko(j,75 ));
        pliko[0].display();
        
      
        }
}