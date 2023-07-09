/*
Identify input: number[] - nums
Ouput: number[] - Product of all elements except for itself
Condition: O(N), cannot use division
*/

function productExceptSelf(nums){
let leftProduct=[]
let rightProduct=[]
let solution=[];

//populate leftProduct
for(let i=0; i < nums.length; i++){
    if(leftProduct.length ===0){
        leftProduct.push(1)
    }else{
        leftProduct.push(leftProduct[i-1]*nums[i-1])
    }
}
//populate rightProduct
for(let i=nums.length -1; i > -1; i--){
    if(rightProduct.length===0){
        rightProduct.push(1)
    }else{
        rightProduct.unshift((rightProduct[0]*nums[i+1]))
    }
}
//populate soltion
for(let i=0 ;i <leftProduct.length; i++){
    solution.push(leftProduct[i]*rightProduct[i])
}
return solution
}