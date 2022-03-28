function sortedSquaredArray(array) {
	const start = Date.now()
	const square = array.map(value => value * value)	
	if(array[0] < 0){
		if (array[array.length - 1] < 0){
			return square.sort()
		}
		return square.reverse()
	}
	console.log(Date.now() - start);
	return square	
}