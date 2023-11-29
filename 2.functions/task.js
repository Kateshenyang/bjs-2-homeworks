function getArrayParams(...arr) {
	let min, max, sum, avg;
	sum = 0;
	avg = 0;
	min = Infinity;
	max = -Infinity;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i]
		} else if (arr[i] < min) {
			min = arr[i]
		}
		sum += arr[i];
	}

	if (arr.length) {
		avg = (sum / arr.length).toFixed(2);
		avg = Number(avg);
	} else {
		undefined
	}
	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	};
	return arr.reduce((prev, item) => prev + item, 0);
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	};
	let min = Math.min(...arr),
		max = Math.max(...arr);
	return max - min;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	};
	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	};
	let sumEvenElement = 0;
	let countEvenElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
			countEvenElement += 1;
		}
	}
	return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
	let maxWorkResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const max = func(...arrOfArr[i]);
		if (max > maxWorkResult) {
			maxWorkResult = max;
		}
	}
	return maxWorkResult;
}