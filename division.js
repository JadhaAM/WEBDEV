let array=[10,34,12,34,65,1];

for (let index = array.length-1; index >= 0; index--) {
    if((array[index]%3==0) && ((array[index]%6==0)&&(array[index]%9==0))){
        console.log(array[index])
    } 
}