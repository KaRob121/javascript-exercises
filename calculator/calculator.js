function add (x, y) {
	return x + y;
}

function subtract (x, y) {
	return x - y;
}

function sum (arr) {
	const total = arr.reduce((total, currNum) => {
		return total + currNum
	}, 0);

	return total;
}

function multiply (arr) {
	const total = arr.reduce((total, currNum) => {
		return total * currNum
	}, 1);

	return total;
}

function power(x, y) {
	let total = 1;
	while (y) {
		total *= x;
		y--;	
	}

	return total;
}

function factorial(x) {
	let total = 1; 
	while (x) {
		total *= x;
		x--;
	}
	
	return total;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}