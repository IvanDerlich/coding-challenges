function productSum(array, depth = 1) {
	let sum = 0;
	for (let i = 0; i < array.length ; i++) {
		if(typeof array[i] === 'number'){
			sum += array[i]
		} else{
			sum += productSum(array[i], depth + 1)
		}
	}
	return sum * depth
}