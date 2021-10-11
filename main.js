function preload(){

}
function setup()
{
    canvas=createCanvas(400,400);
    canvas.position(110,250);
}
function draw(){
    background("purple");
    
   
   stroke("white");
   strokeWeight(7);
   line(120,120,250,120);
   line(250,120,250,250);
   line(250,250,120,250);
   line(120,250,120,120);
   fill("red");
    stroke("green");
    strokeWeight(3);
   circle(120,120,30);
   circle(250,120,30);
   circle(250,250,30);
   circle(120,250,30);
}