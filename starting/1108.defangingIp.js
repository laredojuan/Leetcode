function defangIPaddr(address){
    address=address.split(''); //address is turned into an array and stored back into the variable
    for(let i=0; i<address.length;i++){
        if(address[i]=='.'){ //if the array has a period it 
            address[i]='[.]' //it replaces it with this
        }
    }
    return address.join('')
}