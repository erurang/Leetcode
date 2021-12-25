/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    // brute.. => time exceed
//     let sum = Number.MIN_SAFE_INTEGER // =>>> Number.MIN_VALUE 이게 가장작은 양수임.. 씹..
    
//     for (let i =0; i< nums.length; i++) {
        
//         sum = Math.max(sum,nums[i])
//         for (let j=i+1; j < nums.length; j++) {
        
//             sum = Math.max(sum, nums.slice(i,j+1).reduce((a,b) => a+b))
            
//         }
//     }
//     return sum
    
    // 일단 10^5 => 1,000,000 이기때문에 100만X 100만으로는 시간초과가 날 확률이 높음.
    
    // 첫시작 수는 0번쨰임
    
    let sum = nums[0]
    let max = nums[0]
    // 다음부터 탐색하는데 만약 더한값보다 뒤에값이 더 크면 변경한다.
    // 아니면 계속 더해가면서 매번 최대값을 탐색한다.
    
    for (const x of nums.slice(1)) {
        
        if(sum + x > x) {
            sum += x
            max = Math.max(sum,max)
        } else {
            sum = x
            max = Math.max(max,sum)
        }
        
        
    }
    
    
 
    
    
    return max
};