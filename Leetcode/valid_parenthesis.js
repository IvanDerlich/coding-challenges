var isValid = function(s) {
  let count = ""
  //console.log(count, "count")
  for(let i = 0; i < s.length; i++){
       switch (s[i]){
          case "(":
              count += s[i]
              break;
          case ")":
              if(count[count.length-1]!="("){
                  return false
              }else{
                count = count.slice(0, -1);    
              }
              break;
          case "{":
              count += s[i]
              break;
          case "}":
              if(count[count.length-1]!="{"){            
                  return false
              }else{
                  count = count.slice(0, -1);    
              }
              break;
          case "[":
              count += s[i]
              break;
          case "]":
              if(count[count.length-1]!="["){                     
                return false
              }else{
                  count = count.slice(0, -1);    
              }
              break;
          default:
              return "Error"
      }      
      //console.log(count, "count")
  }
  //console.log(count.length, "count.length")
  if (count.length === 0 ) {    
    return true
  }
  return false
};


function test(input, expected){
  console.log("Begin test")
  //console.log( "Begin test with imput: " + input)
  let result = isValid(input)
  if(result === expected){
    console.log( "Test passed.")
  } else{
    console.log( "Input: " + input)
    console.log( "Expected: " + expected)
    console.log( "Got: " + result)
    console.log( "Test failed." )
  }
  console.log( "------")
}

test ("()", true)
test ("{[]}", true)
test ("[", false)
test ("()", true)
test ("((", false)