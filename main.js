var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");
 
var rover_width = 100;
var rover_height = 90;
 
var background_image = "mars.jpg";    
var b1 = new Image();                 
 
var rover_image = "rover.png";       
 
var r1 = new Image();                
 
var rover_x = 10;          
var rover_y = 10;     
 
 
function uploadBackground() {
     ctx.drawImage(b1,0,0,canvas.width,canvas.height);
}
 
function uploadrover() {
    ctx.drawImage(r1, rover_x, rover_y, rover_width, rover_height);
}
 
 
function add() {
   
    b1.onload = uploadBackground; 
   
    b1.src = background_image;   
 
     
    r1.onload = uploadrover; 
    r1.src = rover_image;   
}
 
 
window.addEventListener("keydown", my_keydown); 
 
function my_keydown(e)
{
    var keyPressed = e.keyCode;        
    console.log(keyPressed);
        if(keyPressed == '38')
        {
            up();
        }
        if(keyPressed == '40')
        {
            down();
        }
        if(keyPressed == '37')
        {
            left();
        }
        if(keyPressed == '39')
        {
            right();
        }
}
 
function up()
{
    if(rover_y >=0)   
    {
        rover_y = rover_y - 10;   //decr to go up//
        console.log("When up arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
}
function down()
{
    if(rover_y <=500)   
    {
        rover_y =rover_y+ 10;
        console.log("When down arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
}
function left()
{
    if(rover_x >= 0)
    {
        rover_x =rover_x - 10;
        console.log("When left arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
}
function right()     
{
    if(rover_x <= 700)
    {
        rover_x =rover_x + 10;
        console.log("When right arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadrover();
   }
}

