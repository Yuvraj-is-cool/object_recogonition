img="";
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}
function preload(){
    img=loagImage('dog_cat.jpg');
}
function draw(){
    image(img,0,0,640,420);
    fill('#FF0000');
    text("Dog",45,75);
    stroke("#FF0000");
    rect(30,60,450,350);
    nofill();
}



