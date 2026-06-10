// storing values//

let xp = 0;
let health = 100;
let gold = 50;

let current_weapon = 0;
let current_page = 0;

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
        text: "Welcome To Dragonaise Summersville .\nThe Store of Enchantments and Honor. \n\nWhat would you like to buy?",

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
        damage: 30,
        intro_text: "Forged in the shadows of a forgotten age, the Dagger Of Doom is said to hunger for battle.\n" +
            "Its cursed edge has ended the lives of countless warriors, and even now, the blade radiates\n" +
            "an unsettling presence.Few possess the courage to wield such a weapon.\n"

    },

    {
        name: "Hammer of Labryinth",
        price: 50,
        damage: 40,
        intro_text: "Forged within the depths of the ancient Labyrinth, this mighty hammer once belonged to a giant king.\n" +
            "Its thunderous blows have crushed countless foes, leaving only shattered armor in their wake.\n" +
            "Even now, warriors speak its name with awe and fear.\n"
    },
    {
        name: "Staff of Ages",
        price: 70,
        damage: 50,
        intro_text: "Crafted by the sages of a forgotten era, the Staff of Ages holds the wisdom of centuries.\n" +
            "Legends say it channels the power of time itself, granting its bearer unmatched mastery.\n" +
            "Many have sought its secrets, but few have proven worthy.\n"
    },
    {
        name: "Dark Matter Sword",
        price: 110,
        damage: 80,
        intro_text: "Born from the remnants of a fallen star, the Dark Matter Sword defies the laws of nature.\n" +
            "Its blade is said to cut through steel, magic, and even the fabric of reality itself.\n" +
            "Those who wield it command a power feared by gods and mortals alike.\n"
    },

]


const store_weapons = [
    {
        page_number: 1,
        "Button Text": ["Next", "Buy", "Leave Store"],
        "button_functions": [goNext, goBuy, goLeave],

    },
    {
        page_number: 2,
        "Button Text": ["Previous", "Next", "Buy", "Leave Store"],
        "button_functions": [goPrevious, goNext, goBuy, goLeave],
    },

    {
        page_number: 3,
        "Button Text": ["Previous", "Next", "Buy", "Leave Store"],
        "button_functions": [goPrevious, goNext, goBuy, goLeave],
    },
    {
        page_number: 4,
        "Button Text": ["Previous", "Buy", "Leave Store"],
        "button_functions": [goPrevious, goBuy, goLeave],
    }

]
function update_store() {

    text.innerText = Weapons[current_page].intro_text;
    text.innerText += "\n"
    text.innerText += "Name : " + Weapons[current_page].name + "\n";
    text.innerText += "Price : " + Weapons[current_page].price + "\n";
    text.innerText += "Damage : " + Weapons[current_page].damage + "\n";

    go_to_store.innerText = store_weapons[current_page]["Button Text"][0];
    go_to_cave.innerText = store_weapons[current_page]["Button Text"][1];
    fight_dragon.innerText = store_weapons[current_page]["Button Text"][2];
    if (current_page == 1 || current_page == 2) {
        go_to_inventory.style.display = "inline-block";
        go_to_inventory.innerText = store_weapons[current_page]["Button Text"][3];
        go_to_inventory.onclick = store_weapons[current_page]["button_functions"][3];
    }
    else {
        go_to_inventory.style.display = "none";
    }


    go_to_store.onclick = store_weapons[current_page]["button_functions"][0];
    go_to_cave.onclick = store_weapons[current_page]["button_functions"][1];
    fight_dragon.onclick = store_weapons[current_page]["button_functions"][2];


}

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
    update_store()
}

function fightSlime() {

}

function fightFangBeast() {

}

function goInventory() {
    console.log("Going to Inventory")
    text.innerText = "Welcome To Your Inventory : \n \n"

    text.innerText += "\n• Category : Weapons \n "
    text.innerText += "------------------------------------- \n"


    let j = 1;
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].category === "weapon") {
            text.innerText += (j) + ". Name : " + inventory[i].name + "\n"
            text.innerText += "   Damage : " + inventory[i].damage + "\n"
            text.innerText += "   Price : " + inventory[i].price + "\n" + "\n"
            j++;
        }
    }
    let k = 1;
    text.innerText += "\n• Category : Edibles \n "
    text.innerText += "------------------------------------- \n"

    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].category === "edible") {
            text.innerText += (k) + ". Name : " + inventory[i].name + "\n"
            text.innerText += "   Quantity : " + inventory[i].quantity + "\n"
            k++;
        }
    }

}
function goNext() {
    current_page += 1;
    update_store()
}

function goPrevious() {
    current_page -= 1;
    update_store()
}

function goBuy() {
}

function goLeave() {
    goStore()
}