
let arr=[3,2,1,100,5];
// first way
arr.sort((a, b) => a - b);
console.log(`the max number :${arr[arr.length-1]}`);
console.log(`the  min number :${arr[0]}`);

// secound way
console.log(`the max number :${Math.max(...arr)}`);
console.log(`the min number :${Math.min(...arr)}`);