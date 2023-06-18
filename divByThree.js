let array=[12 ,33,44,45,66 ,78 ,78 ,75,65,34,33,32,45 ,76,87,87, 98,99,87,87, 56, 55 ,54 ,53]


for (let index = 1; index < array.length-1; index++) {
    if (array[index]%3==0) {
        console.log(array[index]+" this is div by 3")
    }
    
}