var Strength = 20
var Agility = 20
var MagicPower = 20
var Distance = 20
var Power = 20
var Attack = 20
var settings = {
    Enemy: {
        Attack: 20
    },
    Classes(x) {
        if (x == "Elf") {
            Strength = 25;
            Agility = 60;
            MagicPower = 40;
            Distance = 75;
            Power = 50
        };
        if (x == "Dwarf") {
            Strength = 75;
            Agility = 25;
            MagicPower = 20;
            Distance = 10;
            Power = 75
        };
        if (x == "Mage") {
            Strength = 5;
            Agility = 20;
            MagicPower = 100;
            Distance = 100;
            Power = 25
        }
    },
    "Player": {
        Health: 100,
        MaxHp: 100,
        Attack = (Strength*MagicPower)/Power,
    }
} 
