let score = 0;

let selectedCream = "";
let selectedTopping = "";

const creams = [
    "vanilla",
    "chocolate",
    "strawberry"
];

const toppings = [
    "cherry",
    "sprinkles",
    "cookie"
];

let currentOrder = {};

generateOrder();

/* Generate Customer Order */

function generateOrder() {

    currentOrder = {
        cream: creams[Math.floor(Math.random() * creams.length)],
        topping: toppings[Math.floor(Math.random() * toppings.length)]
    };

    document.getElementById("order").innerHTML = `
        🍦 Cream: <b>${currentOrder.cream}</b><br>
        🍒 Topping: <b>${currentOrder.topping}</b>
    `;
}

/* Add Cream */

function addCream(type) {

    selectedCream = type;

    const creamLayer =
        document.getElementById("cream-layer");

    creamLayer.innerHTML = "";

    const cream =
        document.createElement("img");

    cream.src =
        `../images/${type}-cream.png`;

    cream.className = "cream-image";

    creamLayer.appendChild(cream);
}

/* Add Topping */

function addTopping(type) {

    if (selectedCream === "") {

        alert("Choose a cream first!");
        return;
    }

    selectedTopping = type;

    const toppingLayer =
        document.getElementById("topping-layer");

    toppingLayer.innerHTML = "";

    const topping =
        document.createElement("img");

    topping.src =
        `../images/${type}.png`;

    topping.className =
        "falling-topping";

    toppingLayer.appendChild(topping);
}

/* Check Cake */

function checkCake() {

    if (selectedCream === "") {

        alert("Please choose a cream!");
        return;
    }

    if (selectedTopping === "") {

        alert("Please add a topping!");
        return;
    }

    if (
        selectedCream === currentOrder.cream &&
        selectedTopping === currentOrder.topping
    ) {

        score += 100;

        document.getElementById(
            "score"
        ).textContent = score;

        alert("🎉 Perfect Cake! +100");

    } else {

        alert(
            `❌ Wrong Cake!

Customer wanted:

Cream: ${currentOrder.cream}
Topping: ${currentOrder.topping}`
        );
    }

    resetCake();

    generateOrder();
}

/* Reset */

function resetCake() {

    selectedCream = "";
    selectedTopping = "";

    document.getElementById(
        "cream-layer"
    ).innerHTML = "";

    document.getElementById(
        "topping-layer"
    ).innerHTML = "";
}