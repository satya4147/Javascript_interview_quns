
       // Array InterSction and union ;


       let arr1 = [1,2,3,4,8,7]
       let arr2 = [2,5,6,8,5,7]
       
       let interSction =   arr1.filter((values , i)=>{
           return arr2.includes(values);
         })
         
         console.log(interSction)
         
         
      // unquie number ;
         
         let result = [...new Set([...arr1, ...arr2])]
         console.log(result)