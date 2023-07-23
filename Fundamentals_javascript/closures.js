//closures 
//get increment ang getvalue :


function outer(){
      
  function inner(){
    console.log('inner function called')
  }
return inner;
}
console.log(outer()); // inner function total called
const cls = outer();
cls(); // this only console.log msg called


function countvalue(){
  let count =0;
return function(){
    count ++;
  return count;
}
}
const results = countvalue();
console.log(results())
console.log(results())
console.log(results())

//Arrow 

const outer =()=>{
      
  return () =>{
    console.log('arrow  inner function called')
  }
return inner;
}
console.log(outer()); // inner function total called
const cls = outer();
cls(); // this only console.log msg called


function countvalue(){
  let count =0;
return ()=>{
    count ++;
  return count;
}
}
const res = countvalue();
console.log(res())
console.log(res())
console.log(res())

const priventCounte = ()=>{
	let count = 0; //this closuser 
  return{
  increment : (value =1) =>{
  count += value
  },
  getValue :()=>{
  return count
  },
  }  
};

const result = priventCounte();
console.log(result.getValue())
result.increment();
console.log(result.getValue())


const scertValue = ()=>{
let word = 'hello' //closures
return() => word;
}
const getscret = scertValue();
console.log(getscret())
