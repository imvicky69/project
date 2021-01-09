const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, gameState,engine, world,dustbin,paper;
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);

  gameState = "start";

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  dustbin = new DustBin(800, 390, 100, 10);
  paper = new Paper(100, 300, 10);
  ground = Bodies.rectangle(width / 2, 400, width, 10,
  {
    isStatic: true
  });
  World.add(world, ground);
}

function draw() {
  if (gameState === "start") {
    background("black");
    textSize(25);
    fill("red");
    text("𝕋𝕙𝕚𝕤 𝕚𝕤 𝕤𝕞𝕒𝕝𝕝 𝕘𝕒𝕞𝕖 𝕥𝕙𝕒𝕥 𝕨𝕚𝕝𝕝 𝕥𝕖𝕒𝕔𝕙 𝕪𝕠𝕦 𝕥𝕙𝕖 𝕚𝕞𝕡𝕠𝕣𝕥𝕒𝕟𝕔𝕖 𝕠𝕗 𝕥𝕙𝕣𝕠𝕨𝕚𝕟𝕘 𝕒𝕨𝕒𝕪 𝕪𝕠𝕦𝕣 𝕥𝕣𝕒𝕤𝕙. \n                          ℙ𝕣𝕖𝕤𝕤 𝕤𝕡𝕒𝕔𝕖 𝕜𝕖𝕪 𝕥𝕠 𝕊𝕥𝕒𝕣𝕥, 𝕒𝕟𝕕 𝕌𝕡 𝕥𝕠 𝕥𝕙𝕣𝕠𝕨 𝕒𝕨𝕒𝕪 𝕥𝕙𝕖 𝕥𝕣𝕒𝕤𝕙. ", 50,300 )
    if (keyDown("space")) {
      gameState = "play"
    }
  }
  if (gameState === "play") {
    rectMode(CENTER);
    background(0);
    dustbin.display();
    paper.display();

  }
}


function keyPressed(){
  if (keyCode === UP_ARROW && gameState === "play") {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 12,
      y: -13
    });
  }
}
