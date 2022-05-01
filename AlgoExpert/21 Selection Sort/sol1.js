function selectionSort(array) {		
	// console.log(array)
	for(let j = 0; j < array.length; j++){		
		let minIndex = j
		let min = array[j]
		// console.log(min)
        for(let i = j + 1 ; i < array.length; i++ ){
                // console.log("i&j:",j,i)
                if(array[i]< min){
                    min = array[i]
                    minIndex = i
                }
                // console.log(array[i-1], array[i])
                // console.log("---")
            }
            // console.log(minIndex,array[minIndex])
            let aux = array[minIndex]
            array[minIndex] = array[j]
            array[j] = aux
            // console.log(array)
        }
	// console.log(array)
	return array
}