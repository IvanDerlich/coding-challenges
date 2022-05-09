function generateDocument(characters, document) {
	// console.log(characters)
	// console.log(document)
  // generate the characters hash char:count
	const charCount = {}
	for(let i = 0; i < characters.length;i++){
		// console.log(characters[i])
		if(!charCount[characters[i]]) charCount[characters[i]] = 1
		else charCount[characters[i]]++
	}
	// console.log(charCount)
	// let keys = Object.keys(charCount)
	// console.log(keys)
	// traverse the document string
	for(let i = 0; i < document.length;i++){
		let value = document[i]
		let repetitions = charCount[value]
		// console.log(document[i])
		// check the current document char is included in the character hash
		if(repetitions && repetitions > 0){
			console.log(value,"Included")
			// if its included substracts one char count in the char hash
			charCount[value]--
		} else {
			return false
			console.log(document[i],"Not Included")
			// if it's not included, return false
			// return true if it doesn't returns false	
		}	
	}
  return true;
}