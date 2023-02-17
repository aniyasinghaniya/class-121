function preload(){

}
function setup(){
canvas=createCanvas(400,350);
canvas.position(620,500)
video=createCapture(VIDEO)
video.hide()
classifier = ml5.imageClassifier("MobileNet", modelLoaded)
}
function draw(){
image(video,0,0,400,350)
classifier.classify(video,gotResult)
}
function modelLoaded(){
    console.log("Model loaded !")
}
function gotResult(){
    
}