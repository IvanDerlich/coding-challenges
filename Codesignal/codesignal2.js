function solution(arr) {
    let result = ""
    let diff, initialLength, i = 0
    do {
        initialLength = result.length
        arr.forEach(element => {
            if (element && !(element[i] === undefined)){
                result += element[i]
            } 
        });
        i ++
        diff = result.length - initialLength
    } while( diff > 0)
    return result
}


console.log(
    solution(["Daisy", 
    "Rose", 
    "Hyacinth", 
    "Poppy"])
)