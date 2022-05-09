function runLengthEncoding(string) {
	let count = 1, currentChar = string[0], output = ""
	// console.log(currentChar)
  for(let i = 1; i < string.length; i++){
		const sameAsBefore = string[i] === currentChar
		if(string[i] != currentChar || count > 8){
			output += '' + count + currentChar
			currentChar = string[i]
			count = 1
		} else {
			count++
		}			
		// console.log(string[i], sameAsBefore, currentChar, count)
	}
	output += '' + count + currentChar
	// console.log(output)
	return output
}