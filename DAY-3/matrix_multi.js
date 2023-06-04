const multipication=(a,b)=>console.log(a*b);




    let array=[[1,2,4 ,10] ,[5,6,7,20],[8,9,4,5],[5,20,10,30]];
    let array1=[[1,2,4 ,10] ,[5,6,7,20],[8,9,4,5],[5,20,10,30]];
    
    
    for (let i = 0; i <array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i][j]);
        }
        console.log("\n");  
    }
    
    for (let i = 0; i <array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array1[i][j]);
        }
        console.log("\n");  
    }
    
    for (let i = 0; i <array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            multipication(array[i][j],array1[i][j]);
            
        }
      console.log("\n");  
    }
    