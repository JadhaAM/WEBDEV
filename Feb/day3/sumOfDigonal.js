//Given a square matrix, calculate the absolute difference between the sums of its diagonals.
let arr=[[11, 2, 4],
[4 ,5 ,6],
[10 ,8, -12]];
let leftDigonal=0
let rightDigonal=0
let n=arr.length;
for (let i = 0; i <n; i++) {
    leftDigonal+= arr[i][i];
    rightDigonal+= arr[i][n-1-i];
}
console.log(Math.abs(leftDigonal-rightDigonal)); // Math.abs function used for remove negative sign from output