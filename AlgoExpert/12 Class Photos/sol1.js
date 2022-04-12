function classPhotos(redShirtHeights, blueShirtHeights) {
	redShirtHeights.sort()
	blueShirtHeights.sort()
	let back, front;
	console.log(redShirtHeights[redShirtHeights.length-1] )
	console.log(blueShirtHeights[blueShirtHeights.length-1])
	if(
		redShirtHeights[redShirtHeights.length-1] 
		> blueShirtHeights[blueShirtHeights.length-1]
	){
		back = redShirtHeights
		front = blueShirtHeights
	}else{
		front = redShirtHeights
		back = blueShirtHeights
	}
	console.log('Front: ', front)
	console.log('Back: ', back)
	console.log('----------------')
	for(let i = 0 ; i < front.length; i++){
		console.log('f: ', front[i])
		console.log('b: ', back[i])		
		console.log('----')
		if( front[i] >= back[i])			
			return false
	}
  return true;
}