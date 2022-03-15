/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    // 
    
    for (let i = 1; i < nums.length; i++) {
        let idx = i
        for (let j= i-1; j >= 0; j--) {
            if (nums[idx] < nums[j]) {
                [nums[idx],nums[j]] = [nums[j],nums[idx]]
                idx = j
                
                
            }
        }
    }
};