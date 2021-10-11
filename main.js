function preload(){

}
function setup()
{
    canvas=createCanvas(1000,1000);
    canvas.position(100,100);
    video = createCapture(VIDEO);
    video.hide();

}
function draw(){
    background("purple");
    image(video, 200,200,400,400);
   
   stroke("white");
   strokeWeight(7);
   line(120,120,650,120);
   line(650,120,650,650);
   line(650,650,120,650);
   line(120,650,120,120);
   fill("red");
    stroke("green");
    strokeWeight(3);
   circle(120,120,30);
   circle(650,120,30);
   circle(650,650,30);
   circle(120,650,30);
}
function takesnapshot(){
 save("myselfie.png");   
}