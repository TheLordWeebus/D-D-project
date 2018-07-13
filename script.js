var newWin = 1
var strike = 0
var potion = 0
var maxH = 100
var startH = 100
var startEH = 100
var charclass = "n/a"
var logs = " "
function displayClicked() {
	varfinder()
	 permit("enemy1")
	 permit("item1")
	 permit("opOne")
	 permit("opTwo")
	 permit("opThree")
	 permit("opFour")
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
	if (strike <= eChance) {
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
	disable("disp")
}

function deadent() {
	reset()
	newWhin = newWin + 1
	elementChange("win", newWin)
	pathList = popFunc(pathvar,pathList)
}

function secretClicked() {
	elementChange("win", "Win Counter: Derek")
	elementChange("eventDesc","DEREK WHY DID YOU ADD THIS TO THE WIN COUNT?! Can't you get anything right?")
	disable("win")
} 

function option1Clicked() {
	reset()
	popFunc(pathvar,pathList)	
}

function option2Clicked() {
	reset()
	popFunc(pathvar,pathList)
}

function option3Clicked() {
	reset()
	popFunc(pathvar,pathList)
}

function option4Clicked() {
	reset()
	popFunc(pathvar,pathList)
}

function permit(item){
	document.getElementById(item).disabled = false
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
	disable("enemy1")
	disable("item1")
	disable("opOne")
	disable("opTwo")
	disable("opThree")
	disable("opFour")
	startEH = 100
	startH = 100
	potion = 0
}

function popFunc(item, array) {
	var index = array.indexOf(item);
    var part1 = array.slice(0, index);
    var part2 = array.slice(index + 1, array.length);
    return part1.concat(part2);
} 

function disable(item) {
	document.getElementById(item).disabled = true
}