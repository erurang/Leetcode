/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    // 이 문제는 배열문젠데..
    // 어떻게 배열을 이용해서 문제를 풀것인가..?
    // O(n)으로.
    // foR문을 두번 도는 방법은 사용해서는 안된다..
    // 그럼 
    
    // 공간복잡도가 1인거보면 새로운 배열선언도 안해도된다는건데..
    // const ans = []
    
    // 나를 제외한 나머지 값의 곱
    
    // 애초에 0이 두번 곱해지면 뭘하든 0임. 
    
    let zCnt = 0
    
    for(const x of nums) {
        if(x === 0) zCnt++
    }
    
    if(zCnt > 1) return Array(nums.length).fill(0)
    
    
    const ans = []
    
    //  Findindex가 N번의 시간을 소요함..
    // const zeroIndex = []
    // 그래서 해쉬로..
    const zeroHash = {}
    
    let zero = false
    let mulValue = 1
    
    // 곱 만듬 => n번
    for (let i =0; i< nums.length; i++) {
        
        if(nums[i]) mulValue *= nums[i]
        
        else if (!nums[i]) {
            zeroHash[i] = 1
            zero = true
        }
    }
    
    // 체킹  n번 
    for (let i =0; i<nums.length; i++) {
        // 내 숫자가 0이라는것.
        if(zeroHash[i]) {
            ans.push(mulValue)
        // zeroHash가 존재하지 않을때.
        } else if(!zeroHash[i] && zero) {
            ans.push(0)
        } else {
            ans.push(mulValue/nums[i])
        }
    }
    
    // 2n => o(n)
    
    return ans
};