// storing values//

let xp = 0;
let health = 100;
let gold = 50;

let current_weapon = 0;

let fighting;

let monster_health;


const go_to_store = document.querySelector("#button1");
const go_to_cave = document.querySelector("#button2");
const fight_dragon = document.querySelector("#button3");
const go_to_inventory = document.querySelector("#button4");

const text = document.querySelector("#text");
const xptext = document.querySelector("#xptext");
const healthtext = document.querySelector("#Healthtext");
const goldtext = document.querySelector("#Goldtext");

const monstername = document.querySelector("#MonsterName");
const monsterhealth = document.querySelector("#monsterhealth");


const locations = [
    {
        name: "Town Square",
        "Button Text": ["Go to Store", "Go to Cave", "Fight Dragon", "Inventory"],
        "button_functions": [goStore, goCave, goFight, goInventory],
        text: "You Are In the Town Square . "
    },

    {
        name: "store",
        "Button Text": ["Buy 10 Health (10 Gold)", "Buy Weapons", "Go to Town Square", "Inventory"],
        "button_functions": [buyHealth, buyWeapons, goTown, goInventory],
        text: "Welcome To Dragonaise Summersville .\nThe Store of Enchantments and Honor. \n\nWhat would you like to buy?"

    },

    {
        name: "Cave",
        "Button Text": ["Fight Slime", "Fight FangBeast", "Go To Town Square", "Inventory"],
        "button_functions": [fightSlime, fightFangBeast, goTown, goInventory],
        text: "You Enter the Cave. You See some monsters !! \nWho are you going to fight ?",

    }

]

let inventory = [
    {
        category: "edible",
        name: "Water",
        quantity: 1,
    },

    {
        category: "weapon",
        name: "Knife",
        price: 0,
        damage: 10,
    }

]


const Weapons = [
    {
        name: "Dagger Of Doom",
        price: 25,
        damage: 30
    },

    {
        name: "Hammer of Labryinth",
        price: 50,
        damage: 40
    },
    {
        name: "Staff of Ages",
        price: 70,
        damage: 50
    },
    {
        name: "Dark Matter Sword",
        price: 110,
        damage: 80
    },

]

//buttons function//

go_to_store.onclick = goStore;
go_to_cave.onclick = goCave;
fight_dragon.onclick = goFight;
go_to_inventory.onclick = goInventory;


function update(locations) {

    go_to_store.innerText = locations["Button Text"][0];
    go_to_cave.innerText = locations["Button Text"][1];
    fight_dragon.innerText = locations["Button Text"][2];
    go_to_inventory.innerText = locations["Button Text"][3];
    text.innerText = locations.text;

    go_to_store.onclick = locations["button_functions"][0];
    go_to_cave.onclick = locations["button_functions"][1];
    fight_dragon.onclick = locations["button_functions"][2];
    go_to_inventory.onclick = locations["button_functions"][3];

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
    if (gold >= 10 && health <= 200) {
        gold -= 10;
        goldtext.innerText = gold;
        if (health < 191) {
            health += 10;
            text.innerText = "You bought 10 health.";
        }
        else if
            (health > 190 && health < 200) {
            health = 200;
            text.innerText = "Maximum health Reached";
        }

        else {
            health = 200;
            text.innerText = "Your Health is already full!";
            gold += 10;
            goldtext.innerText = gold;
        }

        healthtext.innerText = health;

    }
    else {
        text.innerText = "You don't have enough gold to buy health!";
    }

}


function buyWeapons() {
    text.innerText = "Weapon list :\n \n";

    for (let i = 0; i < Weapons.length; i++) {
        text.innerText += (i + 1) + "." + "Weapon : " + Weapons[i].name + "\n"
        text.innerText += " Price : " + Weapons[i].price + "\n"
        text.innerText += " Damage : " + Weapons[i].damage + "\n"
        text.innerText += "\n"

    }
}
function fightSlime() {

}

function fightFangBeast() {

}

function goInventory() {
    console.log("Going to Inventory")
    text.innerText = "Welcome To Your Inventory : \n \n"

    text.innerText += "\n Category : Weapons \n \n"
    let j = 1;
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].category === "weapon") {
            text.innerText += (j) + ".Name : " + inventory[i].name + "\n"
            text.innerText += "  Damage : " + inventory[i].damage + "\n"
            text.innerText += "  Price : " + inventory[i].price + "\n" + "\n"
            j++;
        }
    }
    let k = 1;
    text.innerText += "\n Category : Edibles \n" + "\n"
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].category === "edible") {
            text.innerText += (k) + ".Name : " + inventory[i].name + "\n"
            text.innerText += "  Quantity : " + inventory[i].quantity + "\n"
            k++;
        }
    }

}