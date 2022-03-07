class Solution:
    def duplicateZeros(self, arr: List[int]) -> None:
        """
        Do not return anything, modify arr in-place instead.
        """
        new_arr = []
        
        zero_flag = False
        
        for i in range(len(arr)):
            if zero_flag:
                zero_flag = False
                continue
                
            if arr[i] == 0:
                new_arr.append(0)
                new_arr.append(0)
                zero_flag == True
            else:
                new_arr.append(arr[i])
                
        for i in range(len(arr)):
            arr[i] = new_arr[i]