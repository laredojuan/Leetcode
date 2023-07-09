/* 
go through each number and do something with it
*/


function maxSubArray(nums){
    if (nums.length ===1) 
    return nums[0];
//keep track of max value
let maxValue = nums[0]
//accumulated number
let accNum = nums[0];

for(let i=1; i < nums.length; i++){ // set the position to 1 because the value was already declared at 0 above

    let calc= Math.max(nums[i],accNum + nums[i]) //checking which one is the bigger number
    if(calc > maxValue) maxValue = calc;
    accNum= calc;
}
return maxValue

    //iterate through each number, and make a decision
        //check if my current number is BIG or should i take my previous accumulated number and that

    //see if my accumulated number is bigger than my MaxValue, if so, replace it

    //accumulated number = calculated value
}

//Time complexity= O(N)
//Space complexity= O(N)