
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// x and y var
var x = canvas.width;
var y = canvas.height/2;

// plane control variables
var upPressed = false;
var downPressed = false;

// plane variables 
var planeHeight = 50;
var planeWidth = 75;
var planeY = (canvas.height-planeHeight) / 2;
var planeX = 30;

//bullet controls
var spacePressed = false;

//Enemy plane array
let enemyPlaneArray = [];

//enemies total
let totalEnemies = 4;

//player lives
var lives = 3;

//score
let score = 0;

//background image
var background = new Image();
background.src = "../img/sky_background.png";

//plane image
var planeImg = new Image();
planeImg.src = "../img/plane_2_blue.png";

//bullet image
var bulletImg = new Image();
bulletImg.src = "../img/torpedo.png";

//enemy bullet image
var enemyBulletImg = new Image();
enemyBulletImg.src = "../img/torpedo_Enemy.png";

//enemy plane image
var enemyPlaneImg = new Image();
enemyPlaneImg.src = "../img/plane_3_blue.png";

//background function
function Background(){
    this.x = 0, this.y = 0, this.w = background.width/3, this.h = background.height;
    this.render = function(){
        //draws image of background and moves it to the left
        ctx.drawImage(background, this.x--, 0, 3840, canvas.height);
        //when it reaches a certain amount of pixels it goes to the start of the image
        if(this.x <= -1475){
            this.x = 0;
        }
    }
}
var backgroundObj1 =  new Background();


//Event listeners
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


//when key is pressed, change it to true
function keyDownHandler(e) {

    if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = true;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = true;
    }
    else if(e.key == " " || e.key == "Spacebar"){
        spacePressed = true;
    }

}

//when key is released, change it to false
function keyUpHandler(e) {
    if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = false;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = false;
    }
    else if(e.key == " " || e.key == "Spacebar"){
        spacePressed = false;
    }
}

//draws the players plane
function drawPlayerPlane(){
    ctx.beginPath();
    ctx.drawImage(planeImg, planeX, planeY, planeWidth, planeHeight);
    ctx.closePath();    
}

//moves player plane
function movePlayerPlane(){
    //if upPressed == true, move planeY up
    if(upPressed) {
        planeY -= 10;
        if (planeY < 0){
            planeY = 0;
        }
    }
    //if downPressed == true, move planeY down
    else if(downPressed) {
        planeY += 10;
        if (planeY + planeHeight> canvas.height){
            planeY = canvas.height - planeHeight;
        }
    }
    //if spacePressed == true, shoot bullet
    else if(spacePressed){          
        bullet.shootBullet();
        
    }
}


//Player plane collion against enemy 
function playerPlaneCollision(){
    //runs through each enemyPlaneArray index
    for(let i = 0; i < enemyPlaneArray.length; i++){

        //checks if enemy plane X is between the player plane X
        if(enemyPlaneArray[i].x < planeX+planeWidth && enemyPlaneArray[i].x > 0){

            //checks if enemy plane Y is between the player plane Y
            if(enemyPlaneArray[i].y + 45 > planeY && enemyPlaneArray[i].y - 45 < planeY){
                //removes a life
                lives--;
                // if no lives are left end the game
                if(!lives){
                    //game over
                    alert("GAME OVER");
                    //store score
                    storeScore();
                    //reload page
                    window.location.reload();
                }
            }

        }
    }
}

//bullet class
class Bullet{
    
    constructor(){
        this.x = planeX;
        this.y = planeY;
        this.width = 15;
        this.height = 10;
        this.speed = 35;
        this.inAir = false;
        
    }

    //sets the bullet variables
    shootBullet(){    
            this.inAir = true;       
            this.x = planeX;
            this.y = planeY+(planeHeight/2);  

    }

    //draws bullet
    draw(){
        //checks if inAir is true
        if(this.inAir){
            //each time it is drawn the x changes 
            this.x += this.speed;                       
            ctx.beginPath();
            ctx.drawImage(bulletImg, this.x, this.y, this.width, this.height);
            ctx.closePath();
            this.collisionEnemy();
            this.collisionWall();
        }
    }

    //checks if there is a collision with the wall
    collisionWall(){
            
        //if bullet has it the canvas change variables
        if(this.x >=canvas.width){
                this.inAir = false;
                spacePressed = false;
                this.x = 0;
                this.y = 0;
            }
    }

    //checks if there is a collision with an enemy
    collisionEnemy(){
        //runs through the enemy plane array
        for(let i = 0; i < enemyPlaneArray.length; i++){
            //checks if bullet has hit an enemyPlane
            if(this.x > enemyPlaneArray[i].x && this.x < enemyPlaneArray[i].x + planeWidth
            && this.y > enemyPlaneArray[i].y && this.y < enemyPlaneArray[i].y+ planeHeight){
                //changes variables
                this.inAir = false;
                spacePressed = false;
                this.x = 0;
                this.y = 0;

                //remove and reload
                enemyPlaneArray[i].hitReload(i);

            }
        }
    }

}

//bullet object
let bullet = new Bullet();


//enemy plane class
class EnemyPlane{

    constructor(){
        //Enemy plane
        this.x = canvas.width + Math.random() * 200 + 50;
        this.y = Math.random() * (canvas.height-planeHeight);
        this.speedX = Math.random() * 5 + 5;
        
        //bullet
        this.bulletX = this.x;
        this.bulletY = this.y;
        this.bulletWidth = 15;
        this.bulletHeight = 10;
        this.bulletSpeed = 12;
        this.bulletInAir = false; 

    }


    //draws the enemy plane
    draw(){
        ctx.beginPath();
        //draws plane image
        ctx.drawImage(enemyPlaneImg, this.x, this.y, planeWidth, planeHeight);
        ctx.closePath();  

        //each time it is drawn the x changes 
        this.x  -= this.speedX;

        //checks if plane needs to reload
        this.checkReload();
    }

    //checks if it has hit the end
    checkReload(){
        for(let i=0; i < enemyPlaneArray.length; i++){
            if(this.x < -75){
                //creates a new enemy when it hits the wall
                enemyPlaneArray.push(new EnemyPlane());

                //reloads enemy back to start
                this.x = canvas.width - this.width;
                this.y = Math.floor(Math.random() * (canvas.height - this.height));
                this.speedX = this.speedX;
            }
        }

    }

    //called by bullet class to remove enemy plane from array using an index
    hitReload(i){
            //removes enemyPlane from array
            enemyPlaneArray.splice(i,1);
            //creates a new enemy
            enemyPlaneArray.push(new EnemyPlane());

            //sets new variables
            this.x = canvas.width - Math.random() * 200 + 50;
            this.y = Math.floor(Math.random() * (canvas.height - this.height));
            this.speedX = this.speedX;

            //increases score
            score++;
        
    }

    //draws bullet
    drawBullet(){
            //when bullet is drawn the x changes
            this.bulletX -= this.bulletSpeed;                       
            ctx.beginPath();
            ctx.drawImage(enemyBulletImg, this.bulletX, this.bulletY, this.bulletWidth, this.bulletHeight);
            ctx.closePath();

        //checks if bullet has reached the end and reloads
        if(this.bulletX <= -20){
            this.bulletX = this.x;
        }

    }

    //checks if bullet has hit the player
    collisionBulletPlayer(){
        //checks if bullet has hit an player plane
        if(this.bulletX <= planeX+planeWidth && this.bulletX <= 30
            && this.bulletY > planeY && this.bulletY < planeY+planeHeight){

                
                this.bulletX = this.x;
                this.bulletY = this.x;
                //remove live
                lives -=1;
                //if there are no lives
                if(!lives){
                    //game over
                    alert("GAME OVER");
                    //store score
                    storeScore();
                    //reload page
                    window.location.reload();
                }

        }
    }



}



//enemy plane load objects into array
function init(){
    for(let i = 0; i < totalEnemies; i++){
        enemyPlaneArray.push(new EnemyPlane());
    }
}


init();


//handle enemy plane
function handleEnemyPlane(){
    //runs through each enemyPlaneArray
    for(let i = 0; i < enemyPlaneArray.length; i++){
        //draws
        enemyPlaneArray[i].draw();
        //draws bullet
        enemyPlaneArray[i].drawBullet();
        //collision bullet player
        enemyPlaneArray[i].collisionBulletPlayer();
      
        
    }

}

//Draw score text onto screen
function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText("Score: "+score, 8, 20);
}

//Draw lives text onto screen
function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText("Lives: "+lives, canvas.width-65, 20);
}

//main draw function
function draw(){

    //clears canvas page
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //draw background
    backgroundObj1.render();

    //draws enemy planes and enemy bullets
    handleEnemyPlane();

    //draws player bullets
    bullet.draw();

    //draws player plane
    drawPlayerPlane();

    //checks if player has colided with enemy
    playerPlaneCollision();

    //draws live text
    drawLives();

    //draws score test
    drawScore();

    //moves the player plane
    movePlayerPlane();

    //tells the browser to call a function to animate
    requestAnimationFrame(draw); 
}


draw();


//stores score of game into local storage
function storeScore(){
    //checks if there is a logged in user in session storage
    if(sessionStorage.loggedInUserEmail !== undefined){
        //extract details of logged in user
        let userObject = JSON.parse(localStorage[sessionStorage.loggedInUserEmail]);

        //checks if current score is more then top score in current logged in user object
        if(score > userObject.topScore){
            //stores current score into player objects score
            userObject.topScore = score;
            localStorage[userObject.email] = JSON.stringify(userObject);
        }

    }
}


