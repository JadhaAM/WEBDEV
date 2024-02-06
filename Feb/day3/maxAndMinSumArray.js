// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values
//  as a single line of two space-separated long integers.
function minMaxArray(arr) {
    arr.sort();
    let min=0,max=0
    for (let i = 0; i < arr.length-1; i++) {
        min+=arr[i]
    }
    for (let i = 1; i < arr.length; i++) {
        max+=arr[i]
    }
    console.log(min+" "+max);  
}
let arr=[7, 69, 2, 221, 8974];
minMaxArray(arr);