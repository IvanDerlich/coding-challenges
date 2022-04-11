function twoNumberSum(array, targetSum) {
	for(i = 0 ; i < array.length ; i++) {
		for(j = i + 1; j < array.length; j++) {
			if(array[i] + array[j] == targetSum){
				return [array[i], array[j]]
			}
		}
	}
	return []
}