let score = 0;

let sauceAdded = false;
let cheeseAdded = false;
let selectedToppings = [];

let baked = false;

const toppings = [
    "pepperoni",
    "mushroom",
    "olive",
    "veggie"
];

let currentOrder = {};

generateOrder();

/* Generate Order */

function generateOrder(){

    currentOrder = {

        topping:
        toppings[
            Math.floor(
                Math.random() *
                toppings.length
            )
        ]
    };

    document.getElementById(
        "order"
    ).innerHTML =

    `
    Topping:
    <b>${currentOrder.topping}</b>
    `;
}

/* Add Sauce */

function addSauce(){

    sauceAdded = true;

    document.getElementById(
        "sauce-layer"
    ).innerHTML =

    `
    <img
    src="../images/tomato-sauce.png">
    `;
}

/* Add Cheese */

function addCheese(){

    if(!sauceAdded){

        alert(
        "🍅 Add sauce first!"
        );

        return;
    }

    cheeseAdded = true;

    document.getElementById(
        "cheese-layer"
    ).innerHTML =

    `
    <img
    src="../images/cheese-layer.png">
    `;
}

/* Add Topping */

function addTopping(type){

    if(!cheeseAdded){

        alert(
        "🧀 Add cheese first!"
        );

        return;
    }

    selectedToppings.push(type);

    const toppingLayer =
    document.getElementById(
        "topping-layer"
    );

    const topping =
    document.createElement("img");

    topping.src =
    `../images/${type}.png`;

    topping.classList.add(
        "pizza-topping"
    );

    topping.style.left =
    (Math.random() * 140)
    + "px";

    topping.style.top =
    (Math.random() * 70)
    + "px";

    toppingLayer.appendChild(
        topping
    );
}

/* Bake Pizza */

function bakePizza(){

    if(!sauceAdded ||
       !cheeseAdded){

        alert(
        "🍕 Complete the pizza first!"
        );

        return;
    }

    baked = true;

    const bakeSound =
    document.getElementById(
        "bakeSound"
    );

    if(bakeSound){

        bakeSound.currentTime = 0;

        bakeSound.play()
        .catch(()=>{});
    }

    alert(
    "🔥 Pizza Baked!"
    );
}

/* Serve Pizza */

function servePizza(){

    if(!baked){

        alert(
        "🔥 Bake the pizza first!"
        );

        return;
    }

    const correct =
    selectedToppings.includes(
        currentOrder.topping
    );

    if(correct){

        score += 100;

        document.getElementById(
            "score"
        ).textContent = score;

        const success =
        document.getElementById(
            "successSound"
        );

        if(success){

            success.currentTime = 0;

            success.play()
            .catch(()=>{});
        }

        alert(
        "🎉 Customer Happy! +100"
        );

    }else{

        alert(

        `❌ Wrong Pizza!

Customer Wanted:

${currentOrder.topping}`

        );
    }

    resetPizza();

    generateOrder();
}

/* Reset */

function resetPizza(){

    sauceAdded = false;

    cheeseAdded = false;

    baked = false;

    selectedToppings = [];

    document.getElementById(
        "sauce-layer"
    ).innerHTML = "";

    document.getElementById(
        "cheese-layer"
    ).innerHTML = "";

    document.getElementById(
        "topping-layer"
    ).innerHTML = "";
}