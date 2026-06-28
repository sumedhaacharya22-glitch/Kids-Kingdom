const emojis = [
    "🐶","🐶",
    "🐱","🐱",
    "🐼","🐼",
    "🐰","🐰",
    "🦊","🦊",
    "🐸","🐸",
    "🐵","🐵",
    "🐨","🐨"
];

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;

const board = document.getElementById("board");
const movesDisplay = document.getElementById("moves");

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function startGame() {

    board.innerHTML = "";
    firstCard = null;
    secondCard = null;
    lockBoard = false;
    moves = 0;

    movesDisplay.textContent = moves;

    const shuffled = shuffle([...emojis]);

    shuffled.forEach(emoji => {

        const card = document.createElement("div");

        card.classList.add("card");
        card.dataset.emoji = emoji;
        card.textContent = emoji;

        card.addEventListener("click", flipCard);

        board.appendChild(card);
    });
}

function flipCard() {

    if (lockBoard) return;
    if (this === firstCard) return;
    if (this.classList.contains("matched")) return;

    this.classList.add("flip");

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;

    moves++;
    movesDisplay.textContent = moves;

    checkMatch();
}

function checkMatch() {

    const isMatch =
        firstCard.dataset.emoji ===
        secondCard.dataset.emoji;

    if (isMatch) {

        firstCard.classList.add("matched");
        secondCard.classList.add("matched");

        resetBoard();
        checkWin();

    } else {

        lockBoard = true;

        setTimeout(() => {

            firstCard.classList.remove("flip");
            secondCard.classList.remove("flip");

            resetBoard();

        }, 1000);
    }
}

function resetBoard() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}

function checkWin() {

    const matchedCards =
        document.querySelectorAll(".matched");

    if (matchedCards.length === emojis.length) {

        setTimeout(() => {

            alert(
                `🎉 Congratulations! You won in ${moves} moves!`
            );

        }, 300);
    }
}

startGame();