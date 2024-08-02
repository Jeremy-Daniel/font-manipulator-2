var webcam;
var canvas;
var model;

function preload(){

}

function setup(){
webcam = createCapture(VIDEO);
webcam.size(550,500);
canvas = createCanvas(550,550,);
canvas.position(560,150);
model=ml5.poseNet(webcam,modelLoaded);
model.on("pose",analyser);
}

function draw(){
background("white")

}

function modelLoaded(){
    console.log("model has started");
}

function analyser(result){
if(result.length>0){
    console.log(result);
}
}