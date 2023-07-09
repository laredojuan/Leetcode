function mostWordsFound(sentences){
    let arr=[];
    let max=0;

    for(let i=0; i< sentences.length; i++){
        arr[i]= sentences[i].split(" ")
        if(arr[i].length>max){
            max=arr[i].length;
        }
    }
    return max;
}

console.log(mostWordsFound(['mary had a little lamb']))