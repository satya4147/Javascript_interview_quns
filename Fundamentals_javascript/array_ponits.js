
/*
1. "this" objcet does not work with arrow functions
2. "arguments" objects does not work with arrow function 
3. you can not use "new" to call arrow function 

  Arrow function is function expressions

*/

//Normal function
const text1 = function(){
  return 'wellcome javascript'
}
console.log( text1()) 

(function(){
  console.log('IIFE function - immedaitely invoked function expressions')
}())

  function exp(){
    console.log(this) //this window but normal function this key word is local object and current value is geting
  }
  exp()

  const obj ={
    text(){
    console.log(this) //  local objcet
    }
  }
  obj.text()
  
  function argFun(){
    console.log(arguments)
  }
console.log(argFun(4,5,6,7))

//Arrow Function
const test = () => {
  console.log('hello world')
}

test()

let test1 = a =>{
  console.log('wellcome')
}
test1()

const text = (a,b)=>a*b;
console.log(text(5,4))

//IIFE :   
(()=>{
  console.log("IIFE -immedaitely invoked arrow function")
})();

const text =()=>{
  console.log(this) //window object
  }
  text(); 

  
const obj1 ={
  test :()=>{
  console.log(this)//window object
  }
  }
  obj1.test()


  const arGfun = () =>{
    console.log(arguments)
  }
  console.log(arGfun(4,5,6,7))// arguments is not defined 
  
  let arGfuns = (...a)=>{
    console.log(a) // using rest oprators
  }
arGfuns(4,5,6,7)