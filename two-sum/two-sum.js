/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   
    const hash = {}
    // hash로 값 : 인덱스 만듬
    for (let i = 0; i < nums.length; i++) {
        hash[nums[i]] = i
    }
    
    
    // Nums 배열을 돌면서
    for (let i = 0; i < nums.length; i++) {
        
        // a+b = c
        // => b = c+a
        // if b in hash  => ok
        const value = target-nums[i]
        
        // hash값이 존재하면
        // value가 존재하는 인덱스와,
        // i 인덱스를 넘겨준다.
        if(hash[value] && hash[value] !== i) {
            return [i,hash[value]]
        }
        
    }
};                                    