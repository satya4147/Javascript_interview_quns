
/* NaN is global proprety representing  "Not-A-Number" : */


let a=5;
let b="value";
console.log(a*b) // NaN

 /* if(isNaN(a*b)){
    console.log('valied ')
  }else{
    console.log('not valied ') 
  } ans : valid */

   if(!isNaN(a*b)){
    console.log('valied ')
  }else{
    console.log('not valied ')
  }
 //ans : not valied

  console.log(NaN == NaN ) // false
  console.log(NaN === NaN) // false

  // isFinite() check for NaN  as well as  infinity values : 

    
  let a=5;
  let b="value";
  console.log(a*b) // NaN
  
 console.log(isFinite(a*b)) //false
 console.log(isFinite(5*4))  // true
 console.log(isFinite(Number.MAX_VALUE *4)) //fasle
  console.log(isFinite(Infinity)) //false