//Create variables here
var pet,petImg,happyPet,happyPetImg;
var foodStock;
var food=20;
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

  if(keyWentDown("space")){
    console.log("pressed")
    reducefood(1)
  }
  console.log(food)
  drawSprites();
  

  if(food<=0){
    fill("red")
    textSize(20)
    text("food is over",200,200)
  }

    //fill("red")
    //textSize(20)
   // text(food,200,200)
}

function readNum(data){
  foodStock=data.val()
  food=foodStock;
}

function reducefood(num){
    database.ref('/').update({
      'foodnum':food-num
    })
}