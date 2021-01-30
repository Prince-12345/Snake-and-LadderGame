    const Engine = Matter.Engine;
    const World = Matter.World;
    const Body= Matter.Body;
    const Bodies = Matter.Bodies;

    var engine, world, body;
    var bgImg;
    var red,blue;
    var blueSpaces, blueMoved;
    var redSpaces, redMoved;
    var dice;

    function preload(){
      bgImg = loadImage("background.png");
    }




function setup(){
 createCanvas(500 , 580);

 engine = Engine.create();
 world = engine.world;

 engine.world.gravity.y=0;

 red = new Redpiece(26,460,20,20);
 blue = new Bluepiece(26,490,20,20);

 blueSpaces = 1;
 blueMoved = false;

 redSpaces = 1;
 redMoved = false;

 //0 position = if die is rolling
 //1 position = current number displayed
 //2nd position = number of time the die will change
 //3rd position = blinking time 
 //4th position = blinking counter
 //5th position = 0 for blue 1 for red
 die = [false , 1 , 0 , false , 0 ];
 die2 = [false , 1 , 0 , false , 0];
}




function draw(){
 background(300,200,200,300);

 Engine.update(engine);

 image(bgImg , 0,0,500,500);
 blue.display();
 red.display();

 //text(mouseX + " , "+ mouseY,mouseX,mouseY );

 textSize(20);
 stroke("Black");
 strokeWeight(2);
 text("Click On the Dice to Roll it",120,545 );

 line(0,500,600,500);
// die = [false , 1 , 0 , false , 0];
 //Draw Die or Make it Blink or Move it.
 if(die[3]===false){
     drawDice(425 , 535, die[1]);
     }else{
         if(die[4]%2 === 0){
             drawDice(425, 535 , die[1]);

             if(blueMoved === false && blueSpaces!== 100){
                 if(blueSpaces%10 === 0){
                     blue.moveUp();
                    }else{
                         var num = Math.floor(blueSpaces/10);
                         if(num === 0 || num === 2 || num ===4 || num === 6|| num ===8){
                             blue.moveRight();
                            }else{
                             blue.moveLeft();
                             }
                        }
                     blueMoved=true;
                     blueSpaces++
                     console.log(blueSpaces);
                }
             }
    if(frameCount%15 === 0){
         die[4]--
         blueMoved=false;
         if(die[4] === 0){
             die[3]=false;
             die[0]=false;
             checkForUpsandDowns();
             } 
         }
     }
  //make the die roll
    if(die[0] === true && die[2]>0 && frameCount%5 === 0 ){
         die[2]--
         die[1]++

    if(die[1]>6 ){
         die[1] = 1; 
     }
        if(die[2]===0){
        die[3] = true;
        die[4] = die[1]*2
        }

        }

        //Red piece
        //0 position = if die is rolling
 //1 position = current number displayed
 //2nd position = number of time the die will change
 //3rd position = blinking time 
 //4th position = blinking counter
        // die = [false , 1 , 0 , false , 0];
    if(die2[3]===false){
        drawDice2(50 , 535, die2[1]);
    }else{
        if(die2[4]%2 === 0){
            drawDice2(50, 535 , die2[1]);
            if(redMoved === false && redSpaces!== 100){
                 if(redSpaces%10 === 0){
                        red.moveUp();
                         }else{
                    var num2 = Math.floor(redSpaces/10);
                    if(num2 === 0 || num2 === 2 || num2 ===4 || num2 === 6|| num2 ===8){
                         red.moveRight();
                           }else{
                            red.moveLeft();
                            }
                           }
                            redMoved=true;
                            redSpaces++
                            console.log(redSpaces);
                       }
                    }
           if(frameCount%15 === 0){
                die2[4]--
                redMoved=false;
                if(die2[4] === 0){
                    die2[3]=false;
                    die2[0]=false;
                    checkForUpsandDowns2();
                    } 
                }
            }
         //make the die roll
           if(die2[0] === true && die2[2]>0 && frameCount%5 === 0 ){
                die2[2]--
                die2[1]++
       
           if(die2[1]>6 ){
                die2[1] = 1; 
            }
               if(die2[2]===0){
               die2[3] = true;
               die2[4] = die2[1]*2
               }
       
               }
       


}


function drawDice(x,y,side){
fill(255);
strokeWeight(3);
stroke("Blue")
rectMode(CENTER);
dice  = rect(x,y,60,60,10);
fill(0);
strokeWeight(3);
 if(side === 1){
 circle(x,y,12);

}else if(side === 2){
    circle(x-20,y-20,12);
    circle(x+20,y+20,12);
}else if(side === 3){
    circle(x-20,y-20,12);
    circle(x,y,12);
    circle(x+20,y+20,12);
}else if(side === 4){
    circle(x-20,y-20,12);
    circle(x+20,y+20,12);
    circle(x+20,y-20,12);
    circle(x-20,y+20,12);

}else if(side === 5){
    circle(x-20,y-20,12);
    circle(x+20,y+20,12);
    circle(x,y,12);
    circle(x+20,y-20,12);
    circle(x-20,y+20,12);
}else if(side === 6){
    circle(x-20,y-20,12);
    circle(x+20,y+20,12);
    circle(x+20,y-20,12);
    circle(x-20,y+20,12);
    circle(x-20,y,12);
    circle(x+20,y,12);
}

}




function drawDice2(x,y,side){
    fill(255);
    strokeWeight(3);
    stroke("Red")
    rectMode(CENTER);
  rect(x,y,60,60,10);
    fill(0);
    strokeWeight(3);
     if(side === 1){
     circle(x,y,12);
    
    }else if(side === 2){
        circle(x-20,y-20,12);
        circle(x+20,y+20,12);
    }else if(side === 3){
        circle(x-20,y-20,12);
        circle(x,y,12);
        circle(x+20,y+20,12);
    }else if(side === 4){
        circle(x-20,y-20,12);
        circle(x+20,y+20,12);
        circle(x+20,y-20,12);
        circle(x-20,y+20,12);
    
    }else if(side === 5){
        circle(x-20,y-20,12);
        circle(x+20,y+20,12);
        circle(x,y,12);
        circle(x+20,y-20,12);
        circle(x-20,y+20,12);
    }else if(side === 6){
        circle(x-20,y-20,12);
        circle(x+20,y+20,12);
        circle(x+20,y-20,12);
        circle(x-20,y+20,12);
        circle(x-20,y,12);
        circle(x+20,y,12);
    }
    
    }
    
/*function keyPressed(){

if(keyCode === 32 && die[0] === false){
die[0] = true;
die[2] = round(random(12,18));
}else if(keyCode === 32 && die[0] === false ){
    die[0] = true;
    die[2] = round(random(12,18));
}

}*/


function mouseClicked(){
    if(mouseX>390 && mouseY>height-80){
    die[0] = true;
    die[2] = round(random(12,18));
}else if(mouseX<80 && mouseY>height-80){
    die2[0] = true;
    die2[2] = round(random(12,18));
}
}


function checkForUpsandDowns(){

 //Ladder
if(blueSpaces === 2){
Body.setVelocity(blue.body, {x:6 , y:-8 })

blueSpaces = 23
}

if(blueSpaces === 6){
Body.setVelocity(blue.body, {x:-5 , y:-22})
blueSpaces = 45
}

if(blueSpaces === 20){
Body.setVelocity(blue.body, {x:6 , y:-22})

blueSpaces = 59
}
if(blueSpaces === 28){
Body.setVelocity(blue.body, {x:7 , y:-8})

blueSpaces = 49
}

if(blueSpaces === 52){
Body.setVelocity(blue.body, {x:0 , y:-8})

blueSpaces = 72
}
if(blueSpaces === 57){
Body.setVelocity(blue.body, {x:7 , y:-22})

blueSpaces = 96
}
if(blueSpaces === 71){
Body.setVelocity(blue.body, {x:-7 , y:-8})

blueSpaces = 92
} 

//Snakes
if(blueSpaces === 43){
    Body.setVelocity(blue.body, {x:5.5 , y:18})
    
    blueSpaces = 17
    }
    
    if(blueSpaces === 50){
    Body.setVelocity(blue.body, {x:-26 , y:22})
    blueSpaces = 5
    }
    
    if(blueSpaces === 56){
    Body.setVelocity(blue.body, {x:20 , y:33})
    
    blueSpaces = 8
    }
    if(blueSpaces === 73){
    Body.setVelocity(blue.body, {x:-13 , y:38})
    
    blueSpaces = 15
    }
    
    if(blueSpaces === 84){
    Body.setVelocity(blue.body, {x:-7 , y:13})

    blueSpaces = 63
    }
    if(blueSpaces === 87){
    Body.setVelocity(blue.body, {x:12 , y:26})
    
    blueSpaces = 49
    }
    if(blueSpaces === 98){
    Body.setVelocity(blue.body, {x:-14, y:39})
    
    blueSpaces = 40
    } 
}





function checkForUpsandDowns2(){

    //Ladder
   if(redSpaces === 2){
   Body.setVelocity(red.body, {x:6 , y:-8 })
   
   redSpaces = 23
   }
   
   if(redSpaces === 6){
   Body.setVelocity(red.body, {x:-5 , y:-22})
   redSpaces = 45
   }
   
   if(redSpaces === 20){
   Body.setVelocity(red.body, {x:6 , y:-22})
   
   redSpaces = 59
   }
   if(redSpaces === 28){
   Body.setVelocity(red.body, {x:7 , y:-8})
   
   redSpaces = 49
   }
   
   if(redSpaces === 52){
   Body.setVelocity(red.body, {x:0 , y:-8})
   
   redSpaces = 72
   }
   if(redSpaces === 57){
   Body.setVelocity(red.body, {x:7 , y:-22})
   
   redSpaces = 96
   }
   if(redSpaces === 71){
   Body.setVelocity(red.body, {x:-7 , y:-8})
   
   redSpaces = 92
   } 
   
   //Snakes
   if(redSpaces === 43){
       Body.setVelocity(red.body, {x:5.5 , y:18})
       
       redSpaces = 17
       }
       
       if(redSpaces === 50){
       Body.setVelocity(red.body, {x:-26 , y:22})
       redSpaces = 5
       }
       
       if(redSpaces === 56){
       Body.setVelocity(red.body, {x:20 , y:33})
       
       redSpaces = 8
       }
       if(redSpaces === 73){
       Body.setVelocity(red.body, {x:-13 , y:38})
       
       redSpaces = 15
       }
       
       if(redSpaces === 84){
       Body.setVelocity(red.body, {x:-7 , y:13})
   
       redSpaces = 63
       }
       if(redSpaces === 87){
       Body.setVelocity(red.body, {x:12 , y:26})
       
       redSpaces = 49
       }
       if(redSpaces === 98){
       Body.setVelocity(red.body, {x:-14, y:39})
       
       redSpaces = 40
       } 
   }
