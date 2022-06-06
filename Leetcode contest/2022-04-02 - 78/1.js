https://leetcode.com/contest/biweekly-contest-75/problems/minimum-bit-flips-to-convert-number/

var minBitFlips = function(start, goal) {
    // console.log(start, dec2bin(start))
    
    // console.log(goal, dec2bin(goal))
    
    const xor = start ^ goal
    const xorString = dec2bin(xor)
    // console.log(xor, xorString)
    
    const xorArray = xorString.split('')
    // console.log('array: ', xorArray)
    
    const count = xorArray.reduce((sum, value) => sum + parseInt( value, 10 ), 0 )
    // console.log('count', count)
    
    // console.log("---")
    return count
};



function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}