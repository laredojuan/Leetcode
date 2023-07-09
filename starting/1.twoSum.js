var twoSum = function(nums, target) {
    for(let i=0;i<nums.length; i++){
        for(let j=i+1;j<nums.length; j++){ //--this second loop is inefficient
    if(nums[i]+nums[j]==target){
        return [i,j]
    }
        }
    }
    };
// Or using hash map

var twoSum = function(nums, target) {
    var map= {};
for(let i=0;i<nums.length; i++){
    var value= nums[i]
    var compPair= target - value
    if(map[compPair] !== undefined){
        return [map[compPair],i];
    }else{
        map[value]= i;
    }
    }
}


//using hash removing the inefficient second loop

function twoSum(nums, target){
    let memory = {};
    for(let i=0; i < nums.length; i++){
       if(memory[nums[i]] === undefined){
           memory[target - nums[i]]=i
       } else{
           return [memory[nums[i]],i]
       }
    }
}

//sorting the array using pointers
function twoSum(nums, target){
    let arr= []
    for(let i=0;i<nums.length;i++){
        arr.push({value: nums[i], index: i})
    }
arr.sort((a, b) => a.value - b.value);// Sort the array in ascending order
 let left =0;
 let right = nums.length -1;
 while(left < right){
     let sums = arr[left].value + arr[right].value;
     if(sums < target){
         left ++;
     }else if (sums > target){
         right --;
     }else{
         return [arr[left].index, arr[right].index]
     }
 }return ;
}