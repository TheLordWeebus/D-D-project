//class abilities
var maxSkill = 100
var Strength = 20
var Agility = 20
var MagicPower = 20
var Distance = 20
var Power = 20
//player abilities
var pStrength = 20
var pAgility = 20
var pMagicPower = 20
var pDistance = 20
var pPower = 20
//dps and enemy chance
var Attack = 20
var eChance = 20
//players chosen class
var charclass = 'n/a'
//settings
var settings = {
    Enemy() {
        Attack = 20,
        eChance; (pDistance-(100 - pAgility))*10
        if (eChance < 0) {eChance*-1}

    },
    Classes(x) {
        if (x == "Elf") { Playersetup(25,60,40,75,50) };
        if (x == "Dwarf") { Playersetup(75,25,20,10,75) };
        if (x == "Mage") { Playersetup(5,20,100,100,25) }
    },
    "Player": {
        Health: 100,
        MaxHp: 100,
        Attack : (Strength*MagicPower)/Power
    }
} 

function Playersetup(x,y,z,a,b){
    elementChange("pS",x)
    pStrength = x
    elementChange("pA",y)
    pAgility = y
    elementChange("pM",z)
    pMagicPower = z
    elementChange("pD",a)
    pDistance = a
    elementChange("pP",b)
    pPower = b
}
