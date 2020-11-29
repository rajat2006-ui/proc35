//Create variables here
var pet,petImg,happyPet,happyPetImg;
var foodStock;
var food;
var database

function preload()
{
  //load images here
  petImg=loadImage("Dog.png");
  happyPetImg=loadImage("happydog.png");
}

function setup() {
  database=firebase.database()
  createCanvas(500, 800);
  
  pet=createSprite(250,600,20,20)
  pet.addImage("dog",petImg)
  pet.scale=0.3;

  foodStock=database.ref('food')
  foodStock.on("value",readNum)  

}


function draw() { 
  background(46,139,87) 
  
  //add styles here

  if(keyWentDown("space")&&food>0){
    
    console.log("pressed")
    //pet.addImage("happyDog",happyPetImg)
    reducefood(food)
  }
  if(food<=0){
    fill("yellow")
    textSize(30)
    text("food is over",250,200)
  }
  //console.log(food)
  drawSprites();

    fill("yellow")
    textSize(30)
    text(food,200,200)
}

function readNum(data){
  food=data.val()
  //food=foodStock;
}

function reducefood(num){
 
    food--;
    database.ref('/').set({
      food:num
    })
    
}