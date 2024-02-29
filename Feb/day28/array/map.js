let arr=[1,2,3,4,5];

for(let k=0;k<=arr.length;k++){
    let i=3;
    let j=0;
    if(i<=j){
        arr[i]=arr[i-1];
        arr[i-1]=arr[i];
        i--;
    }
}

