function minimumSum(num){

    num= num.toString().split('').sort().join('')//turns into an array, splits it into individial digits, sorts them in ascending order, and joins them.
    let num1='';
    let num2='';
    for(let i=0; i<num.length; i=i+2){ //increase the loop by 2. Skips every other element.
        num1+=num[i]; //adds even numbers. Shorthand for num1 = num1 + num[i];
        num2+=num[i+1]; //adds odd numbers. Shorthand for num2 = num2 + num[i+1];
    }
    return Number(num1) + Number(num2)
}

console.log(minimumSum(2932))