class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        
        buy = prices[0]
        
        res = 0
        
        for price in prices[1:]:
            
            if buy > price: 
                buy = price
            else:
                res = max(res,abs(buy - price))
        
        return res