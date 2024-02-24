let arr=[12,32,23,23,32,12];
let result=false;
let i=0,j=arr.length-1;

while (i<arr.length/2) {
    if (arr[i]==arr[j]) {
        result=true;
        i++;
        j--;
    }else{
       
        i++;
        j--;
    }
}

if (result) {
    console.log("array is palindrom");
}else{
    console.log("array is not palindrom");
}