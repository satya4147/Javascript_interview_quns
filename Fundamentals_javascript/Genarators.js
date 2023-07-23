
    
      const gentarFun = function* (){
        console.log('hello');
        yield ;
        console.log('javascript');
        yield ;
        console.log("Es6")
      }
      
      const obj = gentarFun();
    console.log(obj) //{} object
    console.log(obj.next())
    console.log(obj.next())
    console.log(obj.next())

    //object iterators :
    
  const gobj = gentarFun();
  
    for(let i of gobj){
      console.log(i)
    }

    //Rest oprators : 
    const gobj = [...gentarFun()];
    console.log(gobj)
    

    //Ex 2 iterators examaple : 
    
    const obj ={
      start : 15,
      end :20,
      [Symbol.iterator] : function* (){
        
        for(let count = this.start ; count<= this.end; count++){
          yield count;
        }
      }
    }
  for(let i of obj){
    console.log(i)
  }

       
  const obj ={
    start : 15,
    end :20,
    *[Symbol.iterator](){
      
      for(let count = this.start ; count<= this.end; count++){
        yield count;
      }
    }
  }
console.log([...obj]) // arrow function and rest optarators

//Ex : 3

function* outergen(){
  console.log('well come javascript')
}

function* anthorgen(){
  
    const callOuterGen = outergen();
  
    callOuterGen.next();
      
}

const twoAnotherGen = anthorgen();
//console.log(twoAnotherGen.next())
twoAnotherGen.next();

// yiled*

function* outergen(){
  console.log('well come javascript')
}

function* anthorgen(){
 
       yield* outergen();
}

const twoAnotherGen1 = anthorgen();
//console.log(twoAnotherGen.next())
twoAnotherGen1.next();

//Ex : 4 : 

function* gen(){
  yield "one" ;
  yield "Two";
}
const objs = gen();
console.log(objs.next());
console.log(objs.return()) // return in remove and terminate the "return Mathod" the object;

//Ex : 5 try and finally

   
function* gen(){
  try{
     yield "one" ;
yield "Two";
  }finally{
    console.log("finally codeing....")
  }

}
const objs = gen();
console.log(objs.next());
console.log(objs.return()) // return in remove the object; its not a true value bucause finally mathod 
