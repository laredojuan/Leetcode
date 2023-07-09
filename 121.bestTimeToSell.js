
/*
[7,1,5,3,6,4]
Go through the array and see if there's profit
    If there's no profit, continue
    If there is profit,
        check if my current purchase price is less than my old one
            replace my starting price
        Track our profit
            computed profit > profit
                track it
return profit

*/
var maxProfit = function(prices) {
    //original price
    let buyPrice = prices[0]; //7 -----> 1
    //keep track of profit
    let profit =0;
    //Go through the array and see if there is profit
    for(let i =0; i < prices.length-1; i++){ //we are iterating with pairs, we don't want the last one because it's never going to be binded
        //if there is profit
        let tempProfit= prices[i+1] - prices[i]; //subtracts two numbers. Ex. 1-5
        //if the tempProfit is more it would go through the bottom array
        if (tempProfit > 0){
            //current index at 1 is higher than buy price of 7? Yes, replace it.
            if (prices[i] < buyPrice){          
                buyPrice = prices[i]
            }
           //now we move on to the next index, here it would 5. Is more than the current profit of 0? Yes put in the profit of 1-5=4.
        if(prices[i+1]-buyPrice > profit){
            profit = prices[i+1]- buyPrice
        }
        }
    }
    return profit;
};