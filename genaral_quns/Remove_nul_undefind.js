
  // Remove null undefind 0 empty string  from an array;

  const arr = [false , 0 , 'hi' , '', null , undefined , 90];

    arr.filter((values,i) =>{
      //console.log(values)
      if(values){
        console.log(values)
      }
    })
    
    
    
   let result = arr.filter((v,i)=>{
      return v;
    })
   console.log(result)
  