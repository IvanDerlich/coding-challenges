function findThreeLargestNumbers(array) {
	let largest = [
		array[0], array[1], array[2]
	]
	largest.sort((a,b) => a - b)
	console.log("Array")
	console.log(array)
	console.log("Largest")
	console.log(largest)
	console.log("Rest")
	for( let i = 3 ; i < array.length ; i++ ){		
		if(array[i] <= largest[0]) continue			 
		if(array[i] > largest[2]){
			largest[0] = largest[1]
			largest[1] = largest[2]			
			largest[2] = array[i]
		} else if(array[i] > largest[1]){
			largest[0] = largest[1]
			largest[1] = array[i]
		} else {
			largest[0] = array[i]
		}	
		console.log(i, array[i])
	}
	return largest
}