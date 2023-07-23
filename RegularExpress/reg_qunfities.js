
//Quentifites  are "+" "*" {n};

// /* it return all charcter i string with 0 or more matches ;

let str = " this isss a trial string"
let prtn = /is*/g;
console.log(str.match(prtn))

 //ans : ["is", "isss", "i", "i"]

 // "+" string 1 and more charcter matches words returnd ;

 let strs = " this isss a trial string"
 let prtns = /is+/g;
 console.log(strs.match(prtns))
 
   //ans : ["is", "isss"]

   // "?" sign search  for 0 or one occurrence of the given criteria ;

   
let str3 = " this isss a trial string"
let pr = /is?/g;
console.log(str3.match(pr))

 //ans : ["is", "is", "i", "i"]

 let char = "hello hla"
 let pos = /he?l\w+/g;
 console.log(char.match(pos))
 
 //ans : ["hello", "hla"]

// {n} will search for n time in a string;

let char1 = 'hello hola';

let poss = /hel{2}o/g;
  console.log(char1.match(poss))
  
  //ans : [hello]

      
  const times = 'hello hellllo hellllo helllllo ';
  let prtns = /hel{2,4}o/g;
  console.log(times.match(prtns));