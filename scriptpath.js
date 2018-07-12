var pathList = ["Orc","Event1",]
var pathvar = 0
//Make list = number of paths

function varfinder(){
    pathvar = pathList[GetRandom(pathList.length)-1]
    pathfinder(pathvar)
}

function pathfinder(x) {
    if ("Orc" == x) {
        pathOrc()
    }
    if ("Event1" == x) {
        pathEvent1()
    }
}

function pathOrc() {
    elementChange("enemy1", "Orc")
	elementChange("item1", "Potion")
    elementChange("health", startH)
    elementChangelog("log","log" + "You came across an Orc and it attacked you.")
}

function pathEvent1() {
    elementChange("opOne","Attack the bridge randomly and hope it works")
    elementChange("opTwo","Try to find another path")
    elementChange("opThree","Leave an offering then try to cross hoping it works")
    elementChange("opFour","Run around the bridge and through the river")
    elementChange("eventDesc","You wander across paths and lands until you come across a bridge where you seem unable to pass.")
    elementChange("log","log"+"You wander across paths and lands until you come across a bridge where you seem unable to pass.")
}
