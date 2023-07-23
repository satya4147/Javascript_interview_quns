 
 // "m" modify muliti-line matching and anchors (^ and $) we are also used ;

 let str  = "Hello+world \n hello_world \nHello_world";
 let prtn = /^Hello/gm; // \n space so not match the value 
 console.log(str.match(prtn))
 
 //ans :["Hello", "Hello"] 
 
   let str1  = "Hello+world \nhello_world \nHello_world";
 let prtns = /^Hello/gim; // \n space so not match the value 
 console.log(str1.match(prtns))
 
 
   const char = `hello world 
                   Hello line  world
                    hello muluti line`;
   let pos = /hello/gim ;
   console.log(char.match(pos))

   
   const char1 = `hello world1
                   Hello line  world2
                    hello muluti line 3`;
   let poss = /\d$/gm ;
   console.log(char1.match(poss))
   
   //ans : ["1", "2", "3"] 
