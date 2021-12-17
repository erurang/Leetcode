/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    const hash = {}
    // hash?
    
    for (const x of nums) {
    
        if(hash[x]) return true
        else hash[x] = 1
    }
    
    return false
};