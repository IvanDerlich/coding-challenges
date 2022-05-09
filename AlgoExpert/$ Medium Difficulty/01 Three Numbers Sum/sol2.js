function threeNumberSum(array, targetSum) {
	array.sort((a,b)=> a-b)	
	console.log(array)
	const triplets = []
	let sum, left, right
	// console.log(array[left], array[right])
  for(let i = 0; i < array.length; i++){
		left = i + 1
		right = array.length - 1
		while(left < right){
			sum = array[i] + array[left] + array[right]
			console.log(i, left, right, sum, array[i],array[left],array[right])
			if(sum === targetSum) {
				triplets.push([array[i], array[left], array[right]])
				right--
				left++
			} else if( sum > targetSum) {
				right--				
			} else {
				left++
			}
		}
	}
	console.log(triplets)
	return triplets
}