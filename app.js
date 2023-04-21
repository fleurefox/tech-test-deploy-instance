let result = document.getElementById('result');

function insert(num) {
	result.value += num;
}

function clearScreen() {
	result.value = '';
}

function backspace() {
	let output = result.value;
	result.value = output.substring(0, output.length - 1);
}

function calculate() {
	let expression = result.value;
	if (expression) {
		result.value = eval(expression);
	}
}
