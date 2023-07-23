/*
const arr = [4,5,20]
let res = arr[Symbol.iterator]();
 console.log(res)
 console.log(res.next())
  console.log(res.next())
   console.log(res.next())
    console.log(res.next())*/
    
    
/* for(let i of arr){
 console.log(i)
}*/


/*  
let obj = {
        
  start : 10,
  end : 20
}
obj[Symbol.iterator] = function(){
  
    let  itmes = {
      next(){
        
        if(obj.start <= obj.end){
          return{value:obj.start++ , done:false}
        }else{
          return{done:true}
        }
      }
    }
    return itmes;
}

for(let i of obj){
  console.log(i)
} */


  let obj1 = {
    start1 : 1,
    ends: 10,
    [Symbol.iterator](){
     return this
      },
      next(){
        
          if(obj1.start1 <= obj1.ends){
            return{value : obj1.start1++,done:false}
          }else{
            return {done:true}
          }
        
      }
    }
    for(let ele of obj1){
      console.log(ele)
    }


    
  


