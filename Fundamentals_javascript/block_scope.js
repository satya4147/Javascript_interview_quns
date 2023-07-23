
  /* Functional Scope and Block Scope :

      Es5 fuctional scope & that is becuase of "hosting" 
      Es6 does not have hosting it is "block Scope" : 
      block escop : loops and if condisinal  {} its block .
      */

      
    let x= 10; // this global scope
    function a(){
       x=x + 10; 
      
        // x is block scope
      
    }
  function b(){
    console.log(x);   // x is not defined
  }
a(); // x= 20;
b();