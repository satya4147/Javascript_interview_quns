
//LookHead and negitive LookHead ;

  //Postive LookHead : 
  
  let str = "Hi,Is it you, or not"  
  let prtn = /\w+(?=,)/g;
 console.log(str.match(prtn));

  //Negitive LookHead :

    /* x(?!y) Negitive Lookhead  assertions : 
    ("?") is special charcters
    */


  let str1 = "Hi,Is it you, or not"; 
  let prtna = /\b\w+(?!,)\b/g;
 console.log(str1.match(prtna))
 
 //ans : ["Is", "it", "or", "not"]

 let str2 = "Hi,Is it you, or not?"; 
 let prtns = /\b\w+(?!,|\?)\b/g;
console.log(str2.match(prtns))

//ans : ["Is", "it", "or"]