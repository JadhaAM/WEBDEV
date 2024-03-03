let str= "abcddcba";
let palindrom=false;
for (let i = 0; i < str.length; i++) {
    if (str[i]===str[str.length-1-i]) {
        palindrom=true;
    }else{
        palindrom=false
    }
    
}
 palindrom?  console.log("string is palindrom"): console.log("string is not palindrom");