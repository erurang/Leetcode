/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  
    const val = String(x).split("")
    
    while (1) {
        if (val.length <= 1) return true
        
        if (val.shift() !== val.pop()) return false
    }
    
    
};