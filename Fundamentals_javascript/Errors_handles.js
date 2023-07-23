

  
  try{
    
    let a =10;
  letb = 5;
  console.log(a)
  console.log(b)
}catch(err){
  console.log(err.name)
  console.log(err.message)
  console.log(err.stack)
}

// throw errors :

const a = 8 ;
    const ageErr = new Error("Invalied age");

      try{
        if(a<18){
          throw ageErr;
        }else{
          console.log("valid age")
        }
      }catch(err){
        //console.log("Invalied age ")
        console.log(err.name)
        console.log(err.message)
      }

// Ex 2 :  you can genarate custom errors with "Throw" statement.

const a = 8 ;
const ageErr = new Error();

  try{
    if(a<18){
     // throw ageErr;
      throw new TypeError("invalid Error")
    }else{
      console.log("valid age")
    }
  }catch(err){
    //console.log("Invalied age ")
    console.log(err.name)
    console.log(err.message)
  }finally{
    console.log("Finall code...")
  }