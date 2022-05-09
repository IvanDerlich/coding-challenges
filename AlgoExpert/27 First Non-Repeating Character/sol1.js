function firstNonRepeatingCharacter(string) {
    const charCount = {}
      console.log(string)
      for(let i = 0; i < string.length; i++){
          let element = string[i]
          if(charCount[element]) charCount[element]++
          else charCount[element] = 1
      }
      const keys = Object.keys(charCount)
      let firstNR
      for(let i = 0; i < keys.length; i++){
          const element = keys[i]
          if(charCount[element]===1){
              firstNR = element; 
              break
          }
      }
      if(!firstNR) return -1
      for(let i = 0; i < string.length; i++){
          const element = string[i]
          if( element === firstNR) return i
      }
      console.log(firstNR)
      console.log(charCount)
      
    return -1;
  }