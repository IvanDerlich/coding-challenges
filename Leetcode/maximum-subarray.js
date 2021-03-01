//https://leetcode.com/problems/maximum-subarray/

var maxSubArray2 = function(nums) {
    let array = []    
    let sum = 0
    let maxArray = []
    for (let i = 0; i < nums.length ; i++ ){      
      for (let j = i+1; j < nums.length + 1; j++){           
        array = nums.slice(i,j);
        sum = array.reduce((a, b) => a + b, 0)
        maxArray.push(sum)
      }
    }
    return Math.max(...maxArray);
};

var maxSubArray = function(nums) {
  let maxi = res = nums[0];

  for(let i = 1;i < nums.length;i++){
    let cur = nums[i]
    maxi + cur < cur ? maxi = cur : maxi += cur;

    if(res<maxi) res = maxi;
  }
  return res;
};


function test(input, expected){
  console.log("Begin test")
  //console.log( "Begin test with imput: " + input)
  let result = maxSubArray(input)
  if(result === expected){
    console.log( "Test passed.")
  } else{
    console.log( "Input: " + input)
    console.log( "Expected: " + expected)
    console.log( "Got: " + result)
    //result.forEach(array => console.log(array))
    console.log( "Test failed." )
  }
  console.log( "------")
}

let input = []
let expected = 0

input = [-2,1,-3,4,-1,2,1,-5,4]
expected = 6
test(input,expected)

input = [1]
expected = 1
test(input,expected)

input = [0]
expected = 0
test(input,expected)

input = [-1]
expected = -1
test(input,expected)

input = [-2147483647]
expected = -2147483647
test(input,expected)