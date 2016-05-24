var height = document.getElementById('height');
var character = document.getElementById('character');
var button = document.getElementById('button');
var branch = [];

button.addEventListener('click', validate);
height.addEventListener('keypress', keypressHandler);
character.addEventListener('keypress', keypressHandler);

function keypressHandler(event) {
	if (event.keyCode === 13) {
		validate();
	}
}

function validate() {
	if (!height.value || !character.value) {
		alert('no value, enter both a height and character and then hit enter or push button');
	} else {
		var tree = {
			height: height.value,
			character: character.value
		};
		makeTree(tree);
	}
}

function makeTree(tree) {
	for (var x = 0; x < tree.height; x++) {
		makeBranch(x + 1, tree.height - (x + 1), tree.character);
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

