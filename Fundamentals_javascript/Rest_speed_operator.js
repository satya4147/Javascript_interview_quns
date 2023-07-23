

  //Arrow function and Normal function : 
    // 1. argument does working with arrow function 
 //2. return statement is optional

/* Rest Optator : 
 which have function called sum which can take any number of arguments , 
 at the end it should return the sum of all the parameters passed to it : 
 
    rest optator should enter the last parameter
 */

 function sum(...nums){
  console.log(nums)
}

sum(4,5)
sum(5,6,7,8)

function sum(a,...b){
  console.log(a,b)
  
}

sum(4,5)
sum(5,6,7,8)


  function sumArg(){
    console.log(arguments)
  }
  sumArg(1,2,2);

const arg = ()=>{
  console.log(arguments) //  arguments does not work in arrow functions
}
arg(4,5)
  
 
//Spread operator : 
/* As Rest operator  puts the saparete data values in one array ,
  The spread does not exactly  the opposite side : */ 

  
  let arr = [1,2,3,4]
  let arr2 = [...arr,5,6,7];
  console.log(arr2) //rest opretor
  
  let max = [4,5,78,85,452];
   console.log(Math.max(...max)) // spread oprator

