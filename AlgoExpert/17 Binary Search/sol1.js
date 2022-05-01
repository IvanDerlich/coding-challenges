function binarySearch(
	array,
	target,
	startIndex=0,
	endIndex=array.length-1
) {
	let middleIndex = startIndex + Math.ceil( (endIndex - startIndex) / 2)	
	let middleNumber = array[middleIndex]
	console.log("start",  "end", "middle", "middleNum", "target")
	console.log(startIndex, endIndex, middleIndex, middleNumber, target)
	
	if( middleNumber === target){
		return middleIndex
	} else	if(startIndex === endIndex){
		return -1
	} else if (middleNumber > target){		
		return binarySearch( array, target, startIndex, middleIndex - 1)
	} else {		
		return binarySearch( array, target, middleIndex, endIndex)
	}
}