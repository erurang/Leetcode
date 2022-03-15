/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    let ans = ""

    // 첫단어의 길이
    const first_word_length = strs[0].length
    
    const first_word = strs[0]
    
    // 각 str의 단어위치파악을 위한 변수
    let idx = 0
    
    while (idx < first_word_length) {
        
        for (const word of strs.slice(1)) {
            
            if (word[idx] !== first_word[idx]) return ans
                        
        }
        
        
        ans += first_word[idx]
        idx++
    }
    
    return ans
};