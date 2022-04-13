function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    // Write your code here.
      redShirtSpeeds.sort((a,b)=>a-b)
      blueShirtSpeeds.sort((a,b)=>a-b)
      console.log(fastest)
      if (fastest) blueShirtSpeeds.reverse()
      console.log('red: ', redShirtSpeeds)
      console.log('blue: ', blueShirtSpeeds)
      let sum = 0
      for(let i = 0 ; i <redShirtSpeeds.length; i++ ){
          console.log(redShirtSpeeds[i])
          console.log(blueShirtSpeeds[i])
          if ( redShirtSpeeds[i] > blueShirtSpeeds[i]){
              sum += redShirtSpeeds[i]
          }else{
              sum += blueShirtSpeeds[i]
          }
          console.log('----')
      }
      
    return sum;
  }
  