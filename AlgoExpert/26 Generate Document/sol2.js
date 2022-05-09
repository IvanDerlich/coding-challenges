function generateDocument(characters, document) {
	const charCount = {}
	for(let i = 0; i < characters.length;i++){
		if(!charCount[characters[i]]) charCount[characters[i]] = 1
		else charCount[characters[i]]++
	}
	for(let i = 0; i < document.length;i++){
		let value = document[i]
		let repetitions = charCount[value]
		if(repetitions && repetitions > 0) charCount[value]--
		else return false	
	}
  return true;
}