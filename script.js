var newWin = 1
var strike = 0
var potion = 0
var maxH = 100
var startH = 100
var startEH = 100
var log = "hidden"
var charclass = "n/a"
function displayClicked() {
	varfinder()
}

function GetRandom(n){
	return Math.ceil(Math.random() * n); 
} 

function fleeClicked() {
	reset()
}

function item1Clicked() {
	startH = startH + 20
	startH = Math.min(startH+20, maxH)
	if (potion >= 40) {
		deadchr()
	}
	elementChange("health", startH)
	potion = potion + 1
}

function enemy1Clicked() {
	strike = GetRandom(100)
	if (strike < eChance) {
		(startH = startH - 20)
		elementChange("health", startH)
	}
	else {
			(startEH = startEH - Attack)
			var newstat = (startEH + 'hp 20dph')
			elementChange("estat", newstat)
	}
	if (startH == 0) {
		deadchr()
	}
	if (startEH == 0) {
		deadent()
	}
}

function classClicked() {
	elementChange("class1", "Elf")
	elementChange("class3", "Mage")
	elementChange("class2", "Dwarf")
}

function elfClicked() {
	var charclass = "Elf";
}

function dwarfClicked() {
	var charclass = "Dwarf";
}

function mageClicked() {
	var charclass = "Mage";
}


function elementChange(elementID, content) {
	document.getElementById(elementID).innerHTML = content
}

function deadchr() {
	reset()
	elementChange('health', 'Dead');
	document.getElementById('disp').disabled = true
}

function deadent() {
	reset()
	newWhin = newWin + 1
	elementChange("win", newWin)
	popfunc(pathvar,pathList) //Ran into error Pop function not working.
}

function secretClicked() {
	elementChange("win", "Win Counter: Derek")
	elementChange("eventDesc","DEREK WHY DID YOU ADD THIS TO THE WIN COUNT?! Can't you get anything right?")
} 

function option1Clicked() {
	pathfinder(pathvar)
	reset()
}

function option2Clicked() {
	pathfinder(pathvar)
	reset()
}

function option3Clicked() {
	pathfinder(pathvar)
	reset()
}

function option4Clicked() {
	reset()
	pathfinder(pathvar)
}

function reset() {
	elementChange("enemy1", "Enemy 1", )
	elementChange("item1", "Item 1")
	elementChange("health", "Health")
	elementChange("estat", "100hp 20dph")
	elementChange("opOne","Option 1")
	elementChange("opTwo","Option 2")
	elementChange("opThree","Option 3")
	elementChange("opFour","Option 4")
	elementChange("eventDesc","Event Description")
	startEH = 100
	startH = 100
	potion = 0
}

function logCLicked() {
	log = "visible"
}

function popFunc(item, array){
    var index = array.indexOf(item);
    if (index > -1) {
        array.splice(index, 1);
    }
    return array;
} 
