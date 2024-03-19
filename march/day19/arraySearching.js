// let arr=["one ","two" ,"three","four"];
// for (let i = 0; i < arr.length; i++) {
//    if (arr[i].includes("o")) {
    
//        console.log(arr[i]);
//    }
// }

// output := one two four

let arr1=["one ","two" ,"three","four"];
 arr1[arr1.length]="five";
console.log(arr1);


for (let i = 0; i < arr1.length; i++) {
    if (i==arr1.length-1) {
       arr1.length--;
    }
    
}

console.log(arr1);