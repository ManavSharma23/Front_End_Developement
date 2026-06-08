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


