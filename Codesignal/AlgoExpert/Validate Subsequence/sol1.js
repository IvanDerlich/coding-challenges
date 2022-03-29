function isValidSubsequence(array, sequence) {
	if (sequence.length > array.length) {
		return false
	}
	let j = 0;
	while( j < sequence.length ){		
		for(i = j ; i< array.length; i++){
			if(array[i] === sequence[j]){
				if(j === sequence.length - 1){
					return true
				}
				j++				
			}
		}
		return false
	}
	console.log(sequence)
	return sequence.length === 0 ? true : false
}