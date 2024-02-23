let arr1 = [2, 3, 5, 6];
let arr2 = [1, 3, 4, 5];
let result = [];
let idx = 0;
for (let i = 0; i < arr1.length; i++) {
    result[i] = arr1[i];
    idx++;
}
function com(array, k) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == k) {
            return k
        }
    }
}
for (let j = 0; j < arr2.length; j++) {
    let ele = com(result, arr2[j]);
    if (ele) {
    } else {
        result[idx] = arr2[j];
        idx++;
    }
}
console.log(result);