function solution(n) {
    const result = n.toString()
        .split('')
        .reduce((total, num) => Number(total) + Number(num))    
    return result
}

console.log(
    solution(29)
)
