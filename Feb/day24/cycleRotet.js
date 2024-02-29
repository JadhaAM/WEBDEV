let arr = [1, 2, 3, 4, 5];
let temp = 0;

//rotet  right to left 

// for (let i = 0; i < arr.length; i++) {
//     temp = arr[i];
//     arr[i] = arr[arr.length - 1];
//     arr[arr.length - 1] = temp;
// }
// console.log(arr);



for(let k=0;k<arr.length;k++){
    let i=arr.length-1;
    let tem=0;
    if(arr[i]>=arr[k]){
        tem=arr[i];
        arr[i]=arr[i-1];
        arr[i-1]=tem;
        i--;
    }
    console.log(arr[i]);

}
    // rotet left to rigcht

// for (let i =  arr.length-1; i >=0 ;i--) {
//     temp = arr[i];
//     arr[i] = arr[arr.length - 1];
//     arr[arr.length - 1] = temp
// }
// console.log(arr);




