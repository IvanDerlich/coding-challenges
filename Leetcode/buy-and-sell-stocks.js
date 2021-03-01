//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
var maxProfit = function(prices) {
  let results = []
  for (i = 0; i < prices.length ; i++ ){      
      for (j = i; j < prices.length; j++ ){
        profit = prices[j] - prices[i]
        if(profit > 0){
          results.push(profit)
        }
        // console.log(i, "day of buying");
        // console.log(prices[i], "buying price");
        // console.log(j, "day of selling")
        // console.log(prices[j], "selling price")
        // console.log(profit, "Profit")
        // console.log( "------")
      }
  }
  // console.log(results, "results")
  if( results.length === 0){
    return 0;
  }
  return Math.max(...results)  
};

function test(input, expected){
  console.log("Begin test")
  //console.log( "Begin test with imput: " + input)
  let result = maxProfit(input)
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

test ([7,1,5,3,6,4], 5)
// test ([7,6,4,3,1], 0)