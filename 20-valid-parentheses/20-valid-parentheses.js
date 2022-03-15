/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    const stack = []
    
    
    const braket_hash = {
        "(": ")",
        "{" : "}",
        "[" : "]"
    }
    
    for (const w of s) {
        
        if (w === "{" || w === "(" || w === "[") stack.push(w)
        else {
            const popped = stack.pop()
            
            if(braket_hash[popped] !== w) return false
        }
    }
    
    if (stack.length !== 0) return false
    else return true
};