class Solution:
    def findNumbers(self, nums: List[int]) -> int:
        ans = 0
        
        for i in range(len(nums)):
            if len(str(nums[i]))%2 == 0:
                ans += 1
                
        return ans