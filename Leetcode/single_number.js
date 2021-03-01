/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let count = []    
    for(let i = 0; i < nums.length; i++){
      const element = nums[i]
      const occurence_index = count.findIndex(element => element == nums[i])
      //optimize and avoid variable declaration inside for loop
      if(occurence_index > -1){//element has been counted
        count.splice(occurence_index,1)
      }else{
        count.push(element)
      }
    }
    return count[0]
};

function test(input, expected){
  console.log("Begin test")
  //console.log( "Begin test with imput: " + input)
  let result = singleNumber(input)
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


test([2,2,1],1)
test([4,1,2,1,2],4)
test([1],1)