// two sum 

function sum(a,b) {
    return a+b;
}


let array=[2,7,11,15];
let target=26;
for (let index = 0; index < array.length; index++) {
    const count = sum(array[index],array[index+1]);
    if (count==target) {
        console.log(index,index+1);
    }
}