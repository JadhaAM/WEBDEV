let arr1=[1,5,6,8];
let arr2=[2,3,4,6];
let arr3=[3,4,5,6];
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
       for (let k = 0; k < arr3.length; k++) {
        if (arr1[i]==arr2[j] && arr2[j]==arr3[k]) {
            console.log(arr1[i]);
        }
        
       }
        
    }
}