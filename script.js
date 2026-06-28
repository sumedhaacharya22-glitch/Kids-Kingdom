// Welcome Message


// Game Card Animation

const cards =
document.querySelectorAll(".game-card");

cards.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.transform =
            "translateY(-10px) scale(1.05) rotate(1deg)";
        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
            "";
        }
    );

});

// Sparkle Effect

function createSparkle(){

    const sparkle =
    document.createElement("div");

    sparkle.classList.add(
        "sparkle"
    );

    sparkle.style.left =
    Math.random() *
    window.innerWidth + "px";

    sparkle.style.top =
    Math.random() *
    window.innerHeight + "px";

    document.body.appendChild(
        sparkle
    );

    setTimeout(() => {

        sparkle.remove();

    }, 3000);
}

setInterval(
    createSparkle,
    500
);

// Floating Balloon Generator

function createBalloon(){

    const balloon =
    document.createElement("div");

    balloon.innerHTML = "🎈";

    balloon.classList.add(
        "floating-balloon"
    );

    balloon.style.left =
    Math.random() * 100 + "%";

    document.body.appendChild(
        balloon
    );

    setTimeout(() => {

        balloon.remove();

    }, 10000);
}

setInterval(
    createBalloon,
    2000
);