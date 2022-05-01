function insertionSort(array) {
  for(let i = 1 ; i < array.length; i++ ){		
		if(array[i] > array[i-1]) continue
		for(let j = i ; j > 0 ; j--){
			if(array[j] >= array[j - 1]) break
			let aux = array[j]
			array[j] = array[j-1]
			array[j-1] = aux
		}
	}
	return array
}