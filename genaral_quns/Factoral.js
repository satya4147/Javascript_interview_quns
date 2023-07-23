 // Factoral ;

 let num = parseInt(prompt('Enter Number'))
  
 function checkFactoral(num){
   let factral = 1;
   
     for(;  num >=1; num--){
       
       //factral = factral * num
       
         factral *= num
     }
   return factral;
   
 }
console.log(checkFactoral(num))