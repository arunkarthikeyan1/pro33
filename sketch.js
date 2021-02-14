
 var Engine = Matter.Engine,
 World = Matter.World,
 Events = Matter.Events,
 Bodies = Matter.Bodies; 
var particles = [];
var plinkos = [];
var divisions =[];
var particle;
var scoreText=[];

var divisionHeight=300;
var score =0;
var count = 0;
var stcount=0;
var gameState ="start";

function setup() {
createCanvas(800, 800);
engine = Engine.create();
world = engine.world;
ground = new Ground(width/2,height,width,20);

for (var k = 0; k <width; k = k + 80) {
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  scoreText[stcount]=Math.floor(Math.random()*50)*10;
  stcount++;
}
 for (var j = 75; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,75));
 }

 for (var j = 50; j <=width-10; j=j+50) {
     plinkos.push(new Plinko(j,175));
 }

 for (var j = 75; j <=width; j=j+50) {
     plinkos.push(new Plinko(j,275));
 }

 for (var j = 50; j <=width-10; j=j+50) {
     plinkos.push(new Plinko(j,375));
 }
 
}

function draw() {
background("black");
textSize(35)
text("Score : "+score,20,40);
fill("white");

textSize(35);



for(var i = 0; i<10; i++)
{
  text(scoreText[i],(i*80)+10,500);
}

Engine.update(engine);
ground.display();

if ( gameState =="end") {
 
 textSize(100);
 text("GameOver", 150, 250);

}

for (var i = 0; i < plinkos.length; i++) {
  plinkos[i].display();  
}


 if(particle!=null)
 {
    particle.display();
    var  s=0;
    if (particle.body.position.y>760)
     {
   
        if(round(particle.body.position.x) <= (divisions[0].body.position.x + 80))
      {
        s=s+scoreText[0];  
        particle=null;
       
        if ( count>= 5) gameState ="end";                          
      }
      else if (round(particle.body.position.x) <= (divisions[1].body.position.x + 80))
      {
        s=s+scoreText[1]; 
        particle=null;
        
        if ( count>= 5) gameState ="end"; 

      }
      else if (round(particle.body.position.x) <= (divisions[2].body.position.x + 80))
      {
        s=scoreText[2]; 
        particle=null;
        if ( count>= 5) gameState ="end"; 
      } 
      else if (round(particle.body.position.x) <= (divisions[3].body.position.x + 80))

      {
        s=scoreText[3];   
        particle=null;
        if ( count>= 5) gameState ="end"; 

      }
      else if (round(particle.body.position.x) <= (divisions[4].body.position.x + 80))
      {
        s=scoreText[4];
        particle=null;
        if ( count>= 5) gameState ="end"; 
      } 
      else if (round(particle.body.position.x) <= (divisions[5].body.position.x + 80)) 

      {
        s=scoreText[5];  
        particle=null;
        if ( count>= 5) gameState ="end"; 

      }
      else if (round(particle.body.position.x) <= (divisions[6].body.position.x + 80))
      {
        s=scoreText[6];
        particle=null;
        if ( count>= 5) gameState ="end"; 
      } 
      else if (round(particle.body.position.x) <= (divisions[7].body.position.x + 80))

      {
        s=scoreText[7]; 
        particle=null;
        if ( count>= 5) gameState ="end"; 

      }
      else if (round(particle.body.position.x) <= (divisions[8].body.position.x + 80))
      {
        s=scoreText[8];
        particle=null;
        if ( count>= 5) gameState ="end"; 
      } 
      else if (round(particle.body.position.x) <= (divisions[9].body.position.x + 80))

      {
        s=scoreText[9]; 
        particle=null;
        if ( count>= 5) gameState ="end"; 

      }
      
      else{ 
    s=0;}
      particle=null;
          if ( count>= 5) gameState ="end"; 
          score=score+s;
          
        }  
        
      }


for (var k = 0; k < divisions.length; k++) 
{
  divisions[k].display();
}
}


function mousePressed()
{
if(gameState!=="end")
{
   count++;
  particle=new Particle(mouseX, 10, 10, 10); 
}   
}

