function randomizeTarget(){
    const targetStyle = document.getElementById("target").style;
    const gameRect = document.getElementById("game").getBoundingClientRect();
    const maxWidth = gameRect.width;
    const maxHeight = gameRect.height;

    const size = Math.floor((Math.random() * 8) + 8) * maxWidth / 100;
    targetStyle.height = size + "px";
    targetStyle.width = size + "px";

    const maxX = maxWidth - size;
    const maxY = maxHeight - size;
    const xPos = Math.random() * maxX;
    const yPos = Math.random() * maxY;
    const scoreboardHeight = document.getElementById("scores").getBoundingClientRect().height

    targetStyle.marginLeft = xPos + "px";
    targetStyle.marginTop = (yPos + scoreboardHeight + 30) + "px";
    
    targetStyle.borderRadius = Math.floor(Math.random() * 51) + "%";
    const colorList = ["#FF0000", "#FFA500", "#FFFF00", "#008000", "#0000FF", "#00FF00", "#800080"];
    targetStyle.backgroundColor = colorList[Math.floor(Math.random() * colorList.length)];
}

function targetAppear() {
    const targetStyle = document.getElementById("target").style;
    targetStyle.display = "none";
    targetStyle.pointerEvents = "none";

    setTimeout(() => {
        randomizeTarget();
        targetStyle.display = "block";
        targetStyle.pointerEvents = "auto";
        startTime = new Date().getTime();
    }, Math.random() * 2000 + 500);
}

let bestTime = Infinity;
let totalTime = 0;
let amountOfHits = 0;
let averageTime = 0;
let startTime = null;
let gameStarted = false;

const targetStyle = document.getElementById("target").style;
targetStyle.display = "none";
setTimeout(Math.random() + 2000);
targetStyle.display = "block";

document.getElementById("target").addEventListener("click", () =>{
    if (!gameStarted){
        gameStarted = true;
        target.innerText = "";
        randomizeTarget();
        startTime = new Date().getTime();
    }else{
        const endTime = new Date().getTime();
        const reactionTime = endTime - startTime;

        totalTime += reactionTime;
        amountOfHits++;
        averageTime = totalTime / amountOfHits;

        if (reactionTime < bestTime) {
            bestTime = reactionTime;
        }

        document.getElementById("time").innerHTML = ("Current reaction time: " + (reactionTime/1000) + " seconds");
        document.getElementById("record-time").innerHTML = ("Personal record time: " + (bestTime/1000) + " seconds");
        document.getElementById("average-time").innerHTML = ("Average reaction time: " + parseFloat((averageTime/1000).toFixed(3)) + " seconds");
        
        targetAppear();
    }
});