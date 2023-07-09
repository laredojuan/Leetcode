/* S
ubtract the Product and sum of digits of an integer
Input  n=234
Output=15
Explanation 
Product of digits = 2*3*4=24
Sum of digits = 2+3+4=9
Result = 24-9=15
 */

function subtractProductAndSum(n){
let sForm= n.toString();
let mul =1;
let addition =0;
let result=0;

for(let i=0; i<sForm.length;i++){
    mul*=Number(sForm[i])
    addition+=Number(sForm[i])
    result= mul - addition
}
// return mul
// return addition
return result
}

console.log(subtractProductAndSum(234))