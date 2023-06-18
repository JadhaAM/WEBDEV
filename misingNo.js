let array=[1,2,4,3];
let sum=0;
let totalsum=0;
for (let index = 0; index < array.length; index++) {
    sum+=array[index];
    
}
    
for (let index = 1; index <=5 ; index++) {
    totalsum+=index;
    
}
let ans= totalsum-sum;
console.log(ans);