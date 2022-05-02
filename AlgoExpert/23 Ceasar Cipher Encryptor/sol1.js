function caesarCipherEncryptor(string, key) {
	return string.split('').map((value) => {
    let code = parseInt(value, 36)-9 
    code = code + key > 26
      ? (code + key) % 26
      : code + key
    code = code === 0 ? 26 : code
    let asciiCode = 96 + code
  	return String.fromCharCode(asciiCode)
  }).join('')	
}