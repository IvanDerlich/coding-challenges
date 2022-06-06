function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let bPresent = false
    // console.log(S, S.length)
    for ( let i = 0; i < S.length; i++){
        // console.log(S[i])
        if(S[i] === 'b') bPresent = true
        if(S[i] === 'a' && bPresent) return false
    }    
    return true
}

let result = ""

// let input = "aabbb"
// result = solution(input)
// console.log(result)

// input = "ba"
// result = solution(input)
// console.log(result)

input = "aaa"
result = solution(input)
console.log(result)