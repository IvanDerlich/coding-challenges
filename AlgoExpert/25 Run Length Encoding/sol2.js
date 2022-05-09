function runLengthEncoding(string) {
	let count = 1, currentChar = string[0], output = ""
    for(let i = 1; i < string.length; i++){
		if(string[i] != currentChar || count > 8){
			output += count + currentChar
			currentChar = string[i]
			count = 1
		} else count++
	}
	return output + count + currentChar
}