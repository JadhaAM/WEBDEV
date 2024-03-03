let arr=[2,4,-3,8,10];
let k=21;

function SumCount(array,n) {
    let sum=0
    for (let i = 0; i <= n; i++) {
       sum+=array[i];
        
    }
    return sum;
}
let arraySum=arr[0];

for (let i = 1; i < arr.length; i++) {
      
    if (arraySum===k) {
        console.log(arraySum," match");
    
    }
    else{
      arraySum=SumCount(arr,i);
    }

    
}