
// Automatic semicolon insertion (ASI) : 

  console.log("hi")
  console.log("hello world "); // javascript semicolon its optinal 

    let x= 4*
    5
    console.log(x) // ans : 20 ; its new line add in javascript ;


    function a(){
      return  // but javascript internall semcolone is adding  so ans is undefined;
      {
        let x:5;
        
      }
    }

   let ojb = a()
   console.log(obj) // undefind

   
   function test(){
    
    return {
      x:5
    }
  }

 const result = test();
 console.log(result) //{x : 5}
