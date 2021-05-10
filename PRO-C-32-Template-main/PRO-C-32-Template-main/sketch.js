const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    getBackgroundImg();

}

function draw(){

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here
    if (backgroundImg)
        getBackgroundImg(backgroundImg);

        noStroke();
        textSize(35);
        fill("black");
        text("Time: " + time);

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var time = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
    var timeJSON = await time.json();
    var datetime = timeJSON.datetime;

    // write code slice the datetime
    var hour = datetime.slice(11, 13);

    // add conditions to change the background images from sunrise to sunset
    if (hour >= 04 && hour <= 05){
        bg = "sunrise1.png";
    } else if (hour >= 05 && hour <= 06){
        bg = "sunrise2.png";
    } else if (hour >= 06 && hour <= 08){
        bg = "sunrise3.png";
    } else if (hour >= 08 && hour <= 09){
        bg = "sunrise4.png";
    } else if (hour >= 09 && hour <= 11){
        bg = "sunrise5.png";
    } else if (hour >= 11 && hour <= 12){
        bg = "sunrise6.png";
    } else if (hour >= 12 && hour <= 16){
        bg = "sunrise7.png";
    } else if (hour >= 16 && hour <= 18){
        bg = "sunrise8.png";
    } else if (hour >= 18 && hour <= 20){
        bg = "sunrise9.png";
    } else if (hour >= 20 && hour <= 22){
        bg = "sunrise10.png";
    } else if (hour >= 22 && hour <= 23){
        bg = "sunrise11.png";
    } else if (hour >= 23 && hour <= 24){
        bg = "sunrise12.png";
    }          

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);

}
