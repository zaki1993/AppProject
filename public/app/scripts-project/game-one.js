'use strict';
$(document).ready(function(){console.log("You need to collect the cheese!!!");
    console.log("When you pick a cheese you will receive 90 points !!!");
    var canvas = document.getElementById('mario-canvas');
    var ctx = canvas.getContext('2d');
    canvas.focus();
    var speed = 10;
    var level = 'Peacefull';
    var cheeseMove = {
        maxCheese: 1,
        x: Math.random()*(canvas.width - 40),
        y: 20,
        dy:1
    };
    var ratMove = {
        timeToDie: 3,
        mouseWidth: Math.random()*(canvas.width) - 40,
        mouseHeight: 305,
        score: 0
    };
    var bonusMove = {
        maxBalls:1,
        xB: Math.random()*(canvas.width - 40),
        yB: 20,
        dyB:1
    };
    var collected = 0;
    var accelerate = 5;
    var bonus = 0;
//ends here
    console.log("You got "+ratMove.timeToDie+" lifes");
    var timer = 1;
    var cheeseObj = new Image();
    cheeseObj.src = 'images/cheese.png';
    var floorObj = new Image();
    floorObj.src = 'images/floor-block.jpg';
    var mouseObj = new Image();
    mouseObj.src = 'images/rat.png';
    var bonusObj = new Image();
    bonusObj.src = 'images/bonus.png';
//draw them all with clearRect
    function beginGame(timer){
        if(timer===0){
            setInterval(drawCheese, speed);
        }
    }
    function drawCheese() {
        //draw the mouse start here
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //mouse moving starts here
        document.onkeydown  = KeyCheck;
        function KeyCheck() {

            var KeyID = event.keyCode;

            switch(KeyID)
            {
                case 37:
                    ratMove.mouseWidth-=accelerate;
                    break;
                case 39:
                    ratMove.mouseWidth+=accelerate;
                    break;
            }
        }
        //drawing the mouse
        ctx.drawImage(mouseObj, ratMove.mouseWidth, ratMove.mouseHeight);
        for (var i = 0; i < screen.width / floorObj.width; i++) {
            ctx.drawImage(floorObj, 40 * i, 360);
        }
        //drawing the cheese
        for (i = 0; i <= cheeseMove.maxCheese; i++) {
            ctx.drawImage(cheeseObj, cheeseMove.x, cheeseMove.y);
        }
        cheeseMove.y += cheeseMove.dy;
        //drawing the bonusBall
        if(ratMove.score>1499) {
            for (i = 0; i <= bonusMove.maxBalls; i++) {
                ctx.drawImage(bonusObj, bonusMove.xB, bonusMove.yB);
            }
            if (bonusMove.yB > ratMove.mouseHeight-15 && bonusMove.yB<canvas.height-floorObj.height-15 && bonusMove.xB>ratMove.mouseWidth-25 && bonusMove.xB<ratMove.mouseWidth+40){
                collected+=1;
                accelerate = 2*collected + 5;
                bonusMove.yB = -50;
                bonusMove.xB = -50;
            }
            else {
                bonusMove.yB = -50;
                bonusMove.xB = -50;
            }
        }
        //calculate score and levels start here
        if (cheeseMove.y > ratMove.mouseHeight-15 && cheeseMove.y<canvas.height-floorObj.height-15 && cheeseMove.x>ratMove.mouseWidth-25 && cheeseMove.x<ratMove.mouseWidth+40){
            bonus++;
            console.log(bonus);
            ratMove.score += 60+bonus*3;
            //level easy
            if(ratMove.score>1499){
                cheeseMove.dy = 2;
                level = 'Easy';
            }
            //level normal
            if(ratMove.score>4999){
                cheeseMove.dy = 3;
                level = 'Normal';
            }
            //level hard
            if(ratMove.score>9999){
                cheeseMove.dy = 4;
                level = 'Hard';
            }
            //level impossible
            if(ratMove.score>19999){
                level = 'Impossible';
                cheeseMove.dy = 5;
            }
            cheeseMove.y = -20;
            cheeseMove.x = Math.random() * (canvas.width - 80);
        }
        //calculate score and levels ends here
        if (cheeseMove.y > canvas.height){
            cheeseMove.y = -20;
            cheeseMove.x = Math.random() * (canvas.width - 40);
            ratMove.timeToDie--;
            bonus=0;
            if(ratMove.timeToDie>=0) {
                $("#lifeDiv").empty();
                $("#lifeDiv").append('Lifes: ' + ratMove.timeToDie);
            }
        }
        if(ratMove.mouseWidth<-35){
            ratMove.mouseWidth = canvas.width-30;
        }
        if(ratMove.mouseWidth>canvas.width-30){
            ratMove.mouseWidth=-35;
        }
        if (ratMove.timeToDie <= 0) {
            console.log("Game Over!!!");
        }
        if(ratMove.timeToDie>0) {
            $('#scoreDiv').empty();
            $('#scoreDiv').append("Score: "+ratMove.score);
        }
        $('#levelDiv').empty();
        $('#levelDiv').append('Level: '+level);
    }
    $('#levelDiv').append('Level: '+level);
    $("#lifeDiv").append('Lifes: '+ratMove.timeToDie);
    $('#scoreDiv').append('Score: '+ratMove.score);
    $("#startGame").on('click',function(){
        beginGame(0);
    });
    $("#endGame").on('click',function(){

    });
    console.log(cheeseObj);
});
