// Given an array of integers, calculate the ratios of its elements that are positive, negative,
//  and zero. Print the decimal value of each fraction on a new line with  places after the decimal.
function ratios(arr) {
    let n=arr.length;
    let positiveCnt=0;
    let negativeCnt=0;
    let zeroCnt=0;
    for (let i = 0; i < n; i++) {
        if (arr[i]===0) {
            zeroCnt++;
        }
        if (arr[i]>0) {
            positiveCnt++; 
        }
        if (arr[i]<0) {
            negativeCnt++ ;
         }
    }
    let ans=(positiveCnt/n).toFixed(6);
let  ans2=(negativeCnt/n).toFixed(6);
let ans3=(zeroCnt/n).toFixed(6);

console.log(ans);
console.log(ans2);
console.log(ans3);
}
let  arr = [-4, 3, -9, 0, 4, 1];
ratios(arr);