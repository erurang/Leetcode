/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    // brute force ==> time limit exceeded
//     let sellPrice = 0
    
//     for(let i=0; i < prices.length; i++) {
        
//         let Buy = prices[i]
        
//         for (let j=i+1; j <prices.length; j++) {        
            
//             if(Buy < prices[j]) {
//                 sellPrice = Math.max(sellPrice,prices[j]-Buy)
//             }
//         }
//     }
    // return sellPrice    
  
    let l = 0
    let r = 1
    let sellPrice = 0
    
    while (l < prices.length) {
        if(prices[l] < prices[r]) {
            sellPrice = Math.max(sellPrice,prices[r]- prices[l])            
            
            if(r+1 === prices.length) {
                l++
                r= l+1
            } else {
             r++   
            }
        }  else {
            // 같거나 작은경우니까..
            l++
            r = l+1
        }
        
    }
    
    return sellPrice
};