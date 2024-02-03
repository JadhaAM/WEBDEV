/*
    #
   ##
  ###
 ####
 */
function printPattern(n) {
    for (let i = 1; i <= n; i++) {
      let pattern = "";
      for (let j = 1; j <= n - i; j++) {
        pattern += " ";
      }
      for (let k = 1; k <= i; k++) {
        pattern += "#";
      }
      console.log(pattern);
    }
  }
  printPattern(6);
  