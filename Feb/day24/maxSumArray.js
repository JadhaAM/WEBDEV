let arr=[2,4,-3,8,10];

function SumCount(array,n) {
    let sum=0
    for (let i = 0; i <= n; i++) {
       sum+=array[i];
        
    }
    return sum;
}
let arraySum=0;

let temSum=arr[0]
for (let i = 0; i < arr.length; i++) {
    arraySum+=arr[i];
    
}
// console.log(arraySum);

for (let i = 1; i < arr.length; i++) {
      
    if (arraySum<temSum) {
       arraySum=temSum;
    }else{
      temSum=SumCount(arr,i);
    }
    
}

console.log("max :",arraySum);