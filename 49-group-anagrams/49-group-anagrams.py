class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        
        ls = []
        dict = {}
        ans = []
        
        for st in strs:
            ls.append([st,''.join(sorted(st))])
            
        
        for i in ls:
            if i[1] in dict:    
                dict[i[1]].append(i[0])
            else:
                dict[i[1]] = [i[0]]
            
        for i in dict.values():
            ans.append(i)
            
        return ans
            