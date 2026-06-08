// storing values//

let xp = 0;
let health = 100;
let gold = 50;

let current_weapon = 0;

let fighting;

let monster_health;

let inventory = ["Water", "Knife"];


const go_to_store = document.querySelector("#button1");
const go_to_cave = document.querySelector("#button2");
const fight_dragon = document.querySelector("#button3");

const text = document.querySelector("#text");
const xptext = document.querySelector("#xptext");
const healthtext = document.querySelector("#Healthtext");
const goldtext = document.querySelector("#Goldtext");

const monstername = document.querySelector("#MonsterName");
const monsterhealth = document.querySelector("#monsterhealth");


const locations = [
    {
        name: "Town Square",
        "Button Text": ["Go to Store", "Go to Cave", "Fight Dragon"],
        "button_functions": [goStore, goCave, goFight],
        text: "You Are In the Town Square . "
    },

    {
        name: "store",
        "Button Text": ["Buy 10 Health (10 Gold)", "Buy Weapons", "Go to Town Square"],
        "button_functions": [buyHealth, buyWeapons, goTown],
        text: "Welcome To Dragonaise Summersville .\nThe Store of Enchantments and Honor. \n\nWhat would you like to buy?"

    },

    {
        name: "Cave",
        "Button Text": ["Fight Slime", "Fight FangBeast", "Go To Town Square"],
        "button_functions": [fightSlime, fightFangBeast, goTown],
        text: "You Enter the Cave. You See some monsters !! \nWho are you going to fight ?",

    }

]


//buttons function//

go_to_store.onclick = goStore;
go_to_cave.onclick = goCave;
fight_dragon.onclick = goFight;


function update(locations) {

    go_to_store.innerText = locations["Button Text"][0];
    go_to_cave.innerText = locations["Button Text"][1];
    fight_dragon.innerText = locations["Button Text"][2];
    text.innerText = locations.text;

    go_to_store.onclick = locations["button_functions"][0];
    go_to_cave.onclick = locations["button_functions"][1];
    fight_dragon.onclick = locations["button_functions"][2];

}


function goStore() {
    console.log("goStore clicked");
    update(locations[1]);

}

function goTown() {
    console.log("goTown clicked");
    update(locations[0]);

}


function goCave() {
    console.log("goCave clicked");
    update(locations[2]);

}

function goFight() {

}

function buyHealth() {

}
function buyWeapons() {

}


function fightSlime() {

}

function fightFangBeast() {

}
