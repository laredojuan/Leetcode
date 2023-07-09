var containsDuplicate = function(nums) {
   let memory={}; //create a memory
    for(let i=0; i<nums.length;i++){ //Going through the array to see if what i see now. 
        if (memory[nums[i]]== undefined){ //Looking through memmory at nums to see if it was seen before
            memory[nums[i]]= 'number not inside'
        }else{
            return true //if the number does exist in memory, return true
        }
    }
    return false //went through the whole array and didn't see it
};
//Time complexity = 0(n)
//Space complexity = 0(n)

//samething as top but as an arrow function
const containsDuplicate =(nums) => {
    let memory = {};
    for(let i=0; i < nums.length;i++){
        if(memory[nums[i]]==undefined){
            memory[nums[i]]= 'not here'
        }else{
    return true
        }
    
    }
    return false
    };

//------------Sorted the input array-----------

function containsDuplicate(nums){
    nums.sort((a,b)=>{return b-a}) //this sorts them in descending order
    //nums.sort((a,b) =>  a-b ) this sorts them in ascending order
    for(let i=0; i <nums.length; i++){
        if(i>0 && nums[i-1]== nums[i])
    return true  
    }
  return false
}
