var height = document.getElementById('height');
var character = document.getElementById('character');
var button = document.getElementById('button');
var branch = [];

button.addEventListener('click', buttonHandler);
height.addEventListener('keypress', keypressHandler);
character.addEventListener('keypress', keypressHandler);

function buttonHandler() {
	if (validate()) {
		makeTree();
	}
}

function keypressHandler(event) {
	if (event.keyCode === 13) {
		if (validate()) {
			makeTree();
		}
	}
}

function validate() {
	var valid = false;
	if (!height.value || !character.value) {
		alert('no value, enter both a height and character and then hit enter or push button');
	} else {
		valid = true;
	}
	return valid;
}

function makeTree() {
	if (validate()) {
		var treeHeight = height.value;
		var treeCharacter = character.value;
		for (var x = 0; x < treeHeight; x++) {
			makeBranch(x + 1, treeHeight - (x + 1), treeCharacter);
		}
	}
}

function makeBranch(chars, spaces, character) {
	for (var x = 0; x < chars; x++) {
		branch.push(character);
		if (x > 0) {
			branch.unshift(character);
		}
	}  
	for (var y = spaces; y > 0; y--) {
		branch.push(" ");
		branch.unshift(" ");
	}
	branch = branch.join('');
	console.log(branch);
	branch=[];
}

