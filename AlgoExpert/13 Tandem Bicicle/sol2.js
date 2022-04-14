function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
	redShirtSpeeds.sort((a,b)=>a-b)
	blueShirtSpeeds.sort((a,b)=>a-b)
	if (fastest) blueShirtSpeeds.reverse()
	let sum = 0
	for(let i = 0 ; i <redShirtSpeeds.length; i++ )
		sum += redShirtSpeeds[i] > blueShirtSpeeds[i]
			? redShirtSpeeds[i]
			: blueShirtSpeeds[i]
  return sum;
}