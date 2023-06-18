let array=[10,34,12,34,65,1];
let max=0
let min=0

for (let index = 0; index < array.length; index++) {

    if(max<array[index])
    max=array[index];

    else if((max>array[index] ) && (min<array[index]) ){

        min=array[index]
    }
    // else{
        // min=array[index]
    // }
}

console.log(max);
console.log(min);