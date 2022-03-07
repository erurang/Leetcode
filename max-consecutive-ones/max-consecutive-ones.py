class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        ans = 0
        cnt = 0
        
        for i in range(len(nums)):
            if nums[i] == 0:
                ans = max(ans,cnt)
                cnt = 0
            else:
                cnt += 1
        
        ans = max(ans,cnt)
        
        return ans