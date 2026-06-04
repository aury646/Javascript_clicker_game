const mainBtn = document.getElementById("mainBtn");
const upgradeBtn = document.getElementById("upgradeBtn");
const counter = document.getElementById("counter");
const mouseImg = document.getElementById("Mouse");
const clickCounter = document.getElementById("clickCounter");
const healthText = document.getElementById("healthText");

const images = {
    mouse_1: "images/mouse_1.png",
    mouse_1_hit: "images/mouse_1_hit.png",
    mouse_2: "images/mouse_2.png",
    mouse_2_hit: "images/mouse_2_hit.png",
    mouse_3: "images/mouse_3.png",
    mouse_3_hit: "images/mouse_3_hit.png",
    mouse_4: "images/mouse_4.png",
    mouse_4_hit: "images/mouse_4_hit.png"
};

const levels = [
    {
        normal: images.mouse_1,
        hit: images.mouse_1_hit,
        maxHealth: 100
    },
    {
        normal: images.mouse_2,
        hit: images.mouse_2_hit,
        maxHealth: 200
    },
    {
        normal: images.mouse_3,
        hit: images.mouse_3_hit,
        maxHealth: 500
    },
    {
        normal: images.mouse_4,
        hit: images.mouse_4_hit,
        maxHealth: 1000
    }
];

let amount = 0;
let bonus = 1;
let cost = 25;
let level = 0;
let finished = false;

let maxHealth = levels[level].maxHealth;
let health = maxHealth;

function updateUI() {
    counter.textContent = amount;
    clickCounter.textContent = `Clicks: ${amount}`;
    healthText.textContent = `Health: ${health} / ${maxHealth}`;
}

mainBtn.addEventListener("click", () => {

    if (finished) {
        return;
    }

    amount += bonus;
    health -= bonus;

    if (health < 0) {
        health = 0;
    }

    updateUI();

    mouseImg.src = levels[level].hit;

    setTimeout(() => {
        mouseImg.src = levels[level].normal;
    }, 300);

    if (health <= 0) {

        if (level < levels.length - 1) {

            level++;

            maxHealth = levels[level].maxHealth;
            health = maxHealth;

            mouseImg.src = levels[level].normal;

        } else {

            finished = true;

            upgradeBtn.textContent = "Finish";

            alert("Tu pabeidzi spēli!");
        }

        updateUI();
    }

});

function upgrade() {

    if (finished) {
        return;
    }

    if (amount >= cost) {

        amount -= cost;

        bonus *= 2;
        cost *= 2;

        counter.textContent = amount;
        clickCounter.textContent = `Clicks: ${amount}`;
        upgradeBtn.textContent = `Upgrade (${cost})`;

    } else {

        alert(`Nepietiek līdzekļu! Jums ir ${amount}, nepieciešams ${cost}!`);
    }
}

upgradeBtn.addEventListener("click", upgrade);

updateUI();