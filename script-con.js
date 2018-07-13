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
        eChance; (pDistance-(100 - pAgility))*10
        if (eChance < 0) {eChance*-1}

    },
    Classes(x) {
        if (x == "Elf") { Playersetup("25","60","40","75","50") };
        if (x == "Dwarf") { Playersetup("75","25","20","10","75") };
        if (x == "Mage") { Playersetup("5","20","100","100","25") }
    },
    "Player": {
        Health: 100,
        MaxHp: 100,
        Attack : (pStrength*pMagicPower)/pPower
    }
} 

function Playersetup(x,y,z,a,b){
    elementChange("ps",x)
    pStrength = parseInt(x)
    elementChange("pa",y)
    pAgility = parseInt(y)
    elementChange("pm",z)
    pMagicPower = parseInt(z)
    elementChange("pd",a)
    pDistance = parseInt(a)
    elementChange("pp",b)
    pPower = parseInt(b)
}
