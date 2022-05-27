// https://leetcode.com/contest/biweekly-contest-79/problems/check-if-number-has-equal-digit-count-and-digit-value/

var digitCount = function (num) {
  // console.log(num);
  const count = {};

  for (const element of num) {
    // console.log(element)
    if (count[element]) {
      count[element] += 1;
    } else {
      count[element] = 1;
    }
  }
  // console.log(num.length)
  for (let i = 0; i < num.length; i++) {
    console.log(num[i], count[i], num.length,i) 
    if(num[i] === '0'){
        console.log(typeof count[i]== "undefined")
        if(typeof count[i]== "undefined") continue

    } else {
        console.log(num[i]==count[i])
        if(num[i]==count[i]) continue
    }       
    console.log("---")
    return false
  }
  console.log(count); // 👉️ {a: 3, b: 1, c: 2}
  return true  
};
// console.log(
//     digitCount("1210")
// )
// console.log(
//     digitCount("030")
// )
console.log(
    digitCount("5210010007")
)


