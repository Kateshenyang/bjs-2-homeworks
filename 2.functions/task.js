function getArrayParams(...arr) {
<<<<<<< HEAD
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	let avg = 0;
	max = Math.max(...arr);
	min = Math.min(...arr);
	sum = arr.reduce((a, b) => (a + b));
	avg = Number((sum / arr.length).toFixed(2));
	return {
		min: min,
		max: max,
		avg: avg
	};
=======

  return { min: min, max: max, avg: avg };
>>>>>>> parent of c3de22f (Второе задание выполнено)
}

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
