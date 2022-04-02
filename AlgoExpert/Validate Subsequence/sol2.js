function isValidSubsequence(arr, seq) {
    if (seq.length > arr.length) {
          return false
      }
      let arrIndex = 0,
              seqIndex = 0;
      while(arrIndex < arr.length && seqIndex < seq.length){
          if(seq[seqIndex] === arr[arrIndex]){
              seqIndex++		
          }
          arrIndex++
      }
      return seqIndex === seq.length 
  }