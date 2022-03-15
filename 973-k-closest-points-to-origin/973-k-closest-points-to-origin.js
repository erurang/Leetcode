/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const ans = []
    
    const res = []
    
    for (const point of points) {
        const [x,y] = point
        res.push([x**2 + y**2, [x,y]])
    }
    
    
    res.sort((a,b) => a[0] - b[0])
    
    for (let i=0; i<k; i++) {
        ans.push(res[i][1])
    }
    
    
    return ans
};