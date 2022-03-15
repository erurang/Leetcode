/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    
    intervals.sort((a,b) => a[0]-b[0])
    
    const ans = []
    
    let l_pointer = 0
    let pointer = 1
    
    while (intervals.length !== 0) {
        
        if (intervals.length === 1) {
            ans.push(intervals.shift())
            break
        }
        
        
        const [a,b] = intervals[l_pointer]
    
        const [c,d] = intervals[pointer]

        if (b >= c) {
            intervals.shift()
            
            if(b > d) {
                intervals[0] = [a,b]    
            } else {
                intervals[0] = [a,d]
            }
            
        } else {
            ans.push(intervals.shift())
        }

    }
    
    return ans
  
};