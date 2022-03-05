class Solution:
    def isPalindrome(self, s: str) -> bool:
        word = []
        
        for w in s:
            if w.isalpha():
                word.append(w.lower())
            elif w.isdigit():
                word.append(w)
        
        while len(word) > 1:
            if word.pop(0) != word.pop():
                return False
                
        return True