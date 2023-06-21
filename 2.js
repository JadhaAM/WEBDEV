// counter 2
function counter(n) {

    return n+1;
}
let n=10;
let ans=0;
for (i = 0; i < 4; i++) {
    ans= counter(n);
    n=ans;
    console.log(ans);
}

