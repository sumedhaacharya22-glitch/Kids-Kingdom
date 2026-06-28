let score = 0;
let timeLeft = 60;
let gameRunning = false;

const ghost =
document.getElementById("ghost");

const scoreText =
document.getElementById("score");

const timerText =
document.getElementById("timer");

const flashlight =
document.getElementById("flashlight");

const gameOverBox =
document.getElementById("gameOverBox");

const finalScore =
document.getElementById("finalScore");

/* FLASHLIGHT FOLLOWS CURSOR */

document.addEventListener(
    "mousemove",
    (e)=>{

        flashlight.style.left =
        (e.clientX - 90) + "px";

        flashlight.style.top =
        (e.clientY - 90) + "px";

        checkGhostCaught();
    }
);

/* START GAME */

function startGame(){

    if(gameRunning) return;

    gameRunning = true;

    score = 0;
    timeLeft = 60;

    scoreText.textContent = score;
    timerText.textContent = timeLeft;

    gameOverBox.style.display =
    "none";

    const music =
    document.getElementById(
        "spookyMusic"
    );

    if(music){

        music.volume = 0.3;

        music.play().catch(()=>{
            console.log("Music play failed");
        });
    }

    moveGhost();

    startTimer();
}

/* TIMER */

function startTimer(){

    const timer =
    setInterval(()=>{

        if(!gameRunning){

            clearInterval(timer);
            return;
        }

        timeLeft--;

        timerText.textContent =
        timeLeft;

        if(timeLeft <= 0){

            clearInterval(timer);

            endGame();
        }

    },1000);
}

/* GAME OVER */

function endGame(){

    gameRunning = false;

    finalScore.textContent =
    score;

    gameOverBox.style.display =
    "block";

    const music =
    document.getElementById(
        "spookyMusic"
    );

    if(music){

        music.pause();
    }
}

/* FLASHLIGHT HITS GHOST */

function checkGhostCaught(){

    if(!gameRunning) return;

    const ghostRect =
    ghost.getBoundingClientRect();

    const flashRect =
    flashlight.getBoundingClientRect();

    const hit =

        flashRect.left <
        ghostRect.right &&

        flashRect.right >
        ghostRect.left &&

        flashRect.top <
        ghostRect.bottom &&

        flashRect.bottom >
        ghostRect.top;

    if(hit){

        score++;

        scoreText.textContent =
        score;

        const laugh =
        document.getElementById(
            "ghostLaugh"
        );

        if(laugh){

            laugh.currentTime = 0;

            laugh.play()
            .catch(err =>
                console.log(err)
            );
        }

        const catchSound =
        document.getElementById(
            "catchSound"
        );

        if(catchSound){

            catchSound.currentTime = 0;

            catchSound.play()
            .catch(()=>{});
        }

        moveGhost();
    }
}

/* MOVE GHOST */

function moveGhost(){

    const area =
    document.getElementById(
        "gameArea"
    );

    const maxX =
    area.clientWidth - 150;

    const maxY =
    area.clientHeight - 150;

    ghost.style.left =
    Math.random() * maxX
    + "px";

    ghost.style.top =
    Math.random() * maxY
    + "px";
}

/* FAST MOVING GHOST */

setInterval(()=>{

    if(gameRunning){

        moveGhost();
    }

},500);

/* TEST SOUND BUTTON */

function testSound(){

    const laugh =
    document.getElementById(
        "ghostLaugh"
    );

    console.log(laugh);

    laugh.play()
    .then(() => {

        console.log(
            "Sound Playing"
        );

    })
    .catch(err => {

        console.log(err);
    });
}

/* RESTART */

function restartGame(){

    location.reload();
}