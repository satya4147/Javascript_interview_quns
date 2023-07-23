
  //postive Lookbehind and Negitive Lookbehind ;

  /* The lookhead asserction check if  something is fllowing are not x(?=y) ("y fllowing x")
  The lookbehind asserction check if  something is preceding are not ?(<=y)x ("y preceding x")  
  */

  let str = "Dr.javascript Mr.React.js";
  let prtn = /(?<=Dr.)\w+/g;
  console.log(str.match(prtn))

  /* "$" without escape sequence '\' has different meaning  in regex pattren */

          
  let str1 = "Told 10 time to pay $30"
  let pos = /(?<=\$)\d+/g; // postive behind
  let p = /\b(?<!\$)\d+\b/g; //Negitve behind
    console.log(str1.match(pos)) //["30"]
    console.log(str1.match(p)) //["10"]
    