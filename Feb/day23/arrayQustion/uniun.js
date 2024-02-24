let arr1 = [1,5,8,10];
let arr2 = [2,3,5,7];
let result = [];
let idx = 0;

for (let i = 0; i < arr1.length; i++) {
   for (let j = 0; j < arr2.length; j++) {
   
    if (arr1[i]< arr2[j]) {
        result[idx]=arr1[i];
        idx++;
        i++;
    }else{
        result[idx]=arr2[j];
        idx++;
        j++;
    }

    // if (arr1[i]==arr2[j]) {
    //     result[idx]=arr1[i];
    //     idx++;
    //     i++;
    //     j++;

    // }
    
   }
    
}

console.log(result);