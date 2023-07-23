
function settimer(){
  setTimeout(()=>{
    console.log('well come javascript with arrow mathod')
  },1000)
}
settimer()

/*(setTimeout(function(){
  console.log('Normal function')
},1000)) */

let res = function(){
setInterval(function(){
  console.log('hello world')
},1000)
}
res();