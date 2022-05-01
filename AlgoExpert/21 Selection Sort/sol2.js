function selectionSort(array) {		
	for(let j = 0; j < array.length; j++){		
		let minIndex = j
  	    for(let i = j + 1 ; i < array.length; i++ )
			if(array[i]< array[minIndex]) minIndex = i		
		swap(minIndex,j,array)
	}
	return array
}
const swap = (i1, i2, array) => {
	const temp = array[i1]
	array[i1] = array[i2]
	array[i2] = temp
}