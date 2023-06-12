img=""
status=""


function preload(){
img=loadImage("dog_cat.jpg")
}

function setup (){
    canvas=createCanvas(640,420)
    canvas.center()
    object_detector = ml5.objectDetector("cocossd",modelLoaded)
document.getElementById("btn").innerHTML="Status : Detecting Objects"
}

function modelLoaded(){
    console.log("modelLoaded")
    status = true
    object_detector.detect(img,gotResult)
}

function gotResult(error,result){
if(error){
    console.log(error)
    
}
else{
    console.log(result)
}
}

function draw(){
    image(img,0,0,640,420)
    fill("black");
    textSize(13)
    text("Dog",45,75)
noFill()
stroke("black")

    rect(30,60,450,350)

    fill("cyan");
    textSize(13)
    text("cat",575,75)
noFill()
stroke("cyan")

    rect(300,60,300,350)
}