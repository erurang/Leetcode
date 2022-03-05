class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
        
        nums.sort()
        
        sum = 0
        
        for i in range(0,len(nums),2):
            sum += min(nums[i:i+2])
            
        return sum
            