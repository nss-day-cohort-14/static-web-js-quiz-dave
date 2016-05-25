var height = document.getElementById('height');
var character = document.getElementById('character');
var button = document.getElementById('button');
var branch = [];

button.addEventListener('click', buttonHandler);
height.addEventListener('keypress', keypressHandler);
character.addEventListener('keypress', keypressHandler);

function buttonHandler() {
	if (validate()) {
		makeTree(height.value, character.value);
	}
}

function keypressHandler(event) {
	if (event.keyCode === 13) {
		if (validate()) {
			makeTree(height.value, character.value);
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

function makeTree(height, character) {
	for (var x = 0; x < height; x++) {
		makeBranch(x + 1, height - (x + 1), character);
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

