function insertionSort(array) {
  console.log(array)
  for(let i = 1 ; i < array.length; i++ ){		
		console.log("i:", i)
		if(array[i] > array[i-1]) continue
		for(let j = i ; j > 0 ; j--){
			console.log("j:", j,"i:",i,":", array[j], array[i])
			if(array[j] >= array[j - 1]) break
			let aux = array[j]
			console.log(array)
			console.log(array[j])
			array[j] = array[j-1]
			array[j-1] = aux
			console.log(array)
			console.log("---")
		}
		console.log("------")
	}
	return array
}