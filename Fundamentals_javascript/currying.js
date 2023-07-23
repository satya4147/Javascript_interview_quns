
// Normal function currying : 

function outerCurrying(a){
       
  return function(b){
    return a+b
  }
}
let cl = outerCurrying(5)(6) // assign to a=5;
// console.log(cl(6)) // 6 is passed in b - called inner function
console.log(cl);

//Ex : 2

function priceValues(price){
  return function(disc){
    return price * disc
  }
}
const discChange = priceValues(300);
console.log(discChange(0.5))
console.log(discChange(0.3))
console.log(discChange(0.2))

//Arrow Mathod : 
const curryingOuter = (a)=>{
        
  return (b)=>{
    return a+b
  }
}
let res = curryingOuter(5)(6)
console.log(res)

//Ex : 2 
const outer = a => b => a*b;
let results = outer(5)(4);
 console.log(results)

//Ex : 3 
const outerPrice = price => discount => price * discount;
const disCount = outerPrice(4000);
console.log(disCount(0.5))
console.log(disCount(0.2))