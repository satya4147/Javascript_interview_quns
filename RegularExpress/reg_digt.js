
// d is collect the number

let str2 = "i teach html5 css3 react18.0 javasctpi ";
let prtn = /\d/g;

  console.log(str2.match(prtn))

  // \D is collect no-digist number 


  
  let str3 = "i teach html5 css3 react18.0 javasctpi ";
  let prtns = /\D\w+/g; 
  
    console.log(str3.match(prtns))