noseX=0;
noseY=0;

img="";

function preload(){
img=loadImage("mustache-transparent-png")
}

function setup(){
    canvas=createCanvas(380,300);
    canvas.center();
    video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,modaloed);
poseNet.on('pose',gotpose);



}

function draw(){
    image(video,0,0,380,300);
    image(img,noseX-200,noseY-150,40,40);
   
}

function modaloed(){
    console.log('Posenet is Initialized')
}

function gotpose(results) {
 if(results.lenght>0) {

    console.log(results);
    console.log('nose x:'+results[0].pose.nose.x)
    console.log('nose y:'+results[0].pose.nose.y)
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
 } 
 
 function snapshort()
save("mustache.png")

    
}


