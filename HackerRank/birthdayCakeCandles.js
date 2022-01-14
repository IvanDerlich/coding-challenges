function birthdayCakeCandles(candles) {
    // get max value from array
    const max = Math.max(...candles)
    // check occurrences of that value
    let count = 0
    candles.forEach(element => {
        if (element === max) {
            count ++
        }
    });
    return count
}

function test(input, expected){
    console.log("Begin test")
    //console.log( "Begin test with imput: " + input)
    let result = birthdayCakeCandles(input)
    if(result === expected){
      console.log( "Test passed.")
    } else{
      console.log( "Input: " + input)
      console.log( "Expected: " + expected)
      console.log( "Return Value: " + result)
      //result.forEach(array => console.log(array))
      console.log( "Test failed." )
    }
    console.log( "------")
}

let input = []
let expected = 0

input = [3, 2, 1, 3]
expected = 2
test(input,expected)

input = [3, 2, 1, 3, 3]
expected = 3
test(input,expected)

input = [3, 2, 1, 3, 2, 2]
expected = 2
test(input,expected)

input = [3, 2, 1, 1, 1]
expected = 1
test(input,expected)