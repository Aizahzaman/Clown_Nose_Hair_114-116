nose_x=0;
nose_y=0;
function preload(){
nose=loadImage("https://i.postimg.cc/pT4pG7Fs/580b57fbd9996e24bc43bed5.png")
hair=loadImage("https://i.postimg.cc/J42MbJjQ/Clown-Hair.png")
}

function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    picture=createCapture(VIDEO);
    picture.size(500,500);
    picture.hide();
    myModel=ml5.poseNet(picture,modelLoaded);
    myModel.on("pose",getpose); 
}

function modelLoaded(){
    console.log("Your model is ready to use");
}

function getpose(result){
    if(result.length>0){
        console.log(result);
        nose_x=result[0].pose.nose.x;
        nose_y=result[0].pose.nose.y;
        console.log(nose_x,nose_y);
    }
}

function draw(){
    image(picture,0,0,500,500);
    image(nose,nose_x-19,nose_y-19,40,40)
    image(hair,nose_x-130,nose_y-220,250,200)
}