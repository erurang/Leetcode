/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  // 공간복잡도 1
    
    let l = 0
    let r = s.length-1
    

    while (l<r) {
        const tmp = s[l]
        
        s[l] = s[r]
        s[r] = tmp
        
        l++
        r--
    }
    
};