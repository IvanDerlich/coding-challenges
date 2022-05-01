function bubbleSort(array) {
	let sort = true	
	while(sort){
		sort = false
		for (let i = 0 ; i < array.length - 1; i++){
			if( array[i] > array[i+1]){
				sort = true
				let aux = array[i+1]
				array[i+1] = array[i]
				array[i] = aux
			}
		}
	}
	return array
}