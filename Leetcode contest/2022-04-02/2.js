var triangularSum = function(nums) {
    if (nums.length === 1) return nums[0]
    if (nums.length === 0) return
    let result
    const pyramid = [[...nums]]    
    for(let i = 0; i < nums.length; i++){ 
        const prevLayer = pyramid[i]
        const currentLayer = []
        // const aux = pyramid[i]
        for(let j = i + 1 ; j < nums.length; j++){            
            // console.log(i, j)
            const auxIdx = j - i - 1
            // console.log('auxIdx: ', auxIdx)
            // console.log('prevLayer: ', prevLayer)
            // console.log("peek prev layer: ", prevLayer[auxIdx], prevLayer[auxIdx + 1])
            const sum = prevLayer[auxIdx] + prevLayer[auxIdx + 1]
            currentLayer[auxIdx] = sum % 10

            // console.log("---")
        }
        
        if (currentLayer.length > 0) { 
            pyramid.push(currentLayer)             
            if (currentLayer.length == 1) {
                // console.log("Found! ")
                result = currentLayer[0]
            }
        }
    }
    // console.log('pyramid: ', pyramid)
    return result

};

let nums = []
let result = 0;

nums= [1,2,3,4,5]
result = triangularSum(nums)
console.log(result)

nums= [5]
result = triangularSum(nums)
console.log(result)