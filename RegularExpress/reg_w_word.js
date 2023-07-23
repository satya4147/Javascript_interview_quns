
// \w search for word charcter  between [A-Z],[a-z] [0-9] [_] and

  // \w not  ! . &  charcter;

  let str = "Yes ! i do know & 10times";

  let prtn = /\w/g;
  console.log(str.match(prtn)) 
  
  // ans : ["Y", "e", "s", "i", "d", "o", "k", "n", "o", "w", "1", "0", "t", "i", "m", "e", "s"]
  
  let prtns = /\w+/g;
console.log(str.match(prtns))

//ans : ["Yes", "i", "do", "know", "10times"]


  //  /W -uppercase this non- charcter accet exmaple ! . & ;

  let str1 = "Yes ! i do know & 10times";

  let prt = /\W+/g;
  console.log(str1.match(prt)); 
  
//ans : [" ! ", " ", " ", " & "]

  // \s remove the white space 
  // \S non-white space charctre

  let str2 = "Ye\ns ! i do kn\row & 10times";

  let prts = /\S+/g;
  console.log(str2.match(prts)); 
  
//ans : [" ! ", " ", " ", " & "]

      
let cha = 'yes ! i do\n know & \t10 times_say !'
let prrtn = /[\n\t]/g;
console.log(cha.match(prrtn))

//ans:  [" ", "  "]


