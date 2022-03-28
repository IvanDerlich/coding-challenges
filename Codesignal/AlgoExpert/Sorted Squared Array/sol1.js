function sortedSquaredArray(array) {
	if (array.length == 1 ) return [array[0]* array[0]]
	if (array.length == 0 ) return []
	if (array[0]<0){		
		const solution = []
		if(array[array.length - 1] > 0) {
			for( let i = array.length - 1 ; i >= 0 ; i--){
				const square = array[i] * array[i]
				if(solution[solution.length - 1] < square || solution.length === 0) {	
					solution.push(square)
				} else {
					let position = solution.length - 1;
					while (solution[position] > square){		
						position --
					}
					solution.splice(position + 1, 0, square)
				}
			}
			return solution
		}
		for( let i = array.length - 1 ; i >= 0 ; i--){
			solution.push(array[i]*array[i])
		}
		return solution
	} else {
		return array.map(value=>value*value) 	
	}	
}