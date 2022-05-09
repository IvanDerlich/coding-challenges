function threeNumberSum(array, targetSum) {
	array.sort((a,b)=> a-b)
	const triplets = []
  for(let i = 0; i < array.length; i++)
		for(let j = i + 1  ; j < array.length; j++)
			for(let k = j + 1; k < array.length; k++)
				if(array[i] + array[j] + array[k] === targetSum) 
					triplets.push([array[i], array[j], array[k]])
	return triplets
}