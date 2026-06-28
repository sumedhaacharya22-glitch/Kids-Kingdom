let score = 0;

const scoreDisplay =
document.getElementById("score");

const gameArea =
document.getElementById("gameArea");

const startBtn =
document.getElementById("startBtn");

let gameRunning = false;

startBtn.addEventListener(
    "click",
    startGame
);
let timeLeft = 60;

function startTimer(){

    const timer =
    setInterval(() => {

        timeLeft--;

        document.getElementById(
            "timer"
        ).textContent = timeLeft;

        if(timeLeft <= 0){

            clearInterval(timer);

            gameRunning = false;

            alert(
                `🎉 Game Over!

Final Score: ${score}`
            );
        }

    },1000);
}

function startGame(){

    if(gameRunning) return;

    gameRunning = true;

    setInterval(
        createBalloon,
        1000
    );
}

function createBalloon(){

    const balloon =
    document.createElement("div");

    balloon.classList.add(
        "balloon"
    );

    const colors = [

        "#ff4d4d",
        "#4da6ff",
        "#ffd633",
        "#66ff66",
        "#ff66cc",
        "#9966ff"
    ];

    balloon.style.background =
    colors[
        Math.floor(
            Math.random() *
            colors.length
        )
    ];

    balloon.style.left =
    Math.random() * 90 + "%";

    balloon.addEventListener(
        "click",
        () => {

            score += 10;

            scoreDisplay.textContent =
            score;

            balloon.remove();
        }
    );

    gameArea.appendChild(
        balloon
    );

    setTimeout(
        () => {

            if(balloon.parentNode){

                balloon.remove();
            }

        },
        6000
        
    );
}