var timer = 60;
var score=0;
var hitrn =0;

//make bubble using the function
function makeBubble(){
    var clutter = "";
    for(var i =0 ; i<=125;i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div id="bubble">${rn}</div>`   
    }
    document.querySelector("#bottom").innerHTML=clutter;
}

//time of the game
function runTimer(){
    var timerint = setInterval(() => {
        if(timer>0){
            timer--;
            document.querySelector("#Timer").textContent=timer;
        }else{
            clearInterval(timerint);
            document.querySelector("#bottom").innerHTML="";
            gameOver()
        }
    }, 1000);
}

//generate a new hit
function hit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitValue").textContent=hitrn;
}

//icreasing the score
function increaaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent=score;
}
document.querySelector("#bottom")
.addEventListener("click",function(dets){
    var clickedNumber =(Number(dets.target.textContent));
    if(clickedNumber ===  hitrn){
        increaaseScore();
        makeBubble();
        hit();
    }else{
        makeBubble()
    }
})


//to show the game over text
function gameOver(){
    var over = document.querySelector("#bottom");
    over.textContent="Game Over";
    over.style.color="green";
    over.style.fontSize="100px";
    over.style.fontFamily ="Times new Romen";
    over.style.fontWeight="900";
}
makeBubble();

//start button
document.querySelector("#StarBtn")
.addEventListener("click",function(){
    timer=60;
    runTimer();
    increaaseScore();
    hit();
    makeBubble();
})

//End button
document.querySelector("#EndBtn")
.addEventListener("click",function(){
    gameOver();
    timer=0;
    document.querySelector("#Timer").textContent=timer
})

// gsap section 
gsap.from("#pannel-top .elem",{
    y:-50,
    x:-50,
    duration :0.5,
    delay :1.5,
    scale:0,
    opacity:0,
    stagger :0.5,
})
gsap.from("#bubble",{
    y:-50,
    opacity:0,
    scale:3,
    duration:1,
    delay:0.5,
})
gsap.from("#pannel",{
    scale:3,
    opacity:0,
    duration:0.5,
    delay:1,
    rotate : 360,
})
gsap.from("button",{
    y:50,
    x:30,
    scale:2,
    opacity:0,
    duration:1,
    delay : 2,
    rotate : 180,
})