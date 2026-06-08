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

//buttons function//

go_to_store.onclick = goStore;
go_to_cave.onclick = goCave;
fight_dragon.onclick = goFight;


function goStore() {
    go_to_store.innerText = "Buy 10 Health (10 Gold)";
    go_to_cave.innerText = "Buy Weapons";
    fight_dragon.innerText = "Go to town square";
    text.innerText = "Welcome To Dragonaise Summersville .\nThe Store of Enchantments and Honor. \n\nWhat would you like to buy?";

    go_to_store.onclick = buyHealth;
    go_to_cave.onclick = buyWeapons;
    fight_dragon.onclick = goTown;

}

function goTown() {
    go_to_store.innerText = "Go To Store";
    go_to_cave.innerText = "Go to Cave";
    fight_dragon.innerText = "Fight Dragon";
    text.innerText = "You are back at the town square.";

    go_to_store.onclick = goStore;
    go_to_cave.onclick = goCave;
    fight_dragon.onclick = goFight;

}



function goCave() {

}

function goFight() {

}

