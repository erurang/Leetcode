/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    const w = s.toLowerCase()
        .replace(/\s/g,"")
        .replace(/\W/g,"")
        .replace(/_/g,"")
        .replace(/-/g,"")
        .split("")
        .reverse()
    
    while (w.length) {
        
        const shift = w.shift()
        const pop = w.pop()
        
        
        if(shift === undefined) break
        if(pop === undefined) break
        
        if(shift !== pop) return false
    }
    
    return true
};