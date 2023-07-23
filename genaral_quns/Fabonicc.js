
//Fiabonacci series ; 

let limit = prompt('Enter Number');

let a =0;
let b =1;

let fab = a+b;
console.log(a)

  do{
    console.log(fab)
    
    fab = a+b;
    a =b ;
    b = fab
  }while(fab < limit)


           
  let number =prompt('enter Number')
    
  let n1 = 0 , n2 = 1 , nextItem ;

      nextItem = n1+n2;

   console.log('Fabonacci series : ')
   console.log(n1); // print 0
    console.log(n2); // print 1

   
   while(nextItem <= number){
     
      console.log(nextItem)   
      n1 =n2;
     n2= nextItem
     nextItem = n1+n2;
      
   }

   or

           
   let number = prompt('Enter Number')
   
     let n1 = 0, n2=1 , nextItems;
      
        console.log('Fibonacci Series:');

        for(let i=1 ; i<=number ; i++){
          
            console.log(n1)
          
            nextItems = n1+n2;
            n1 = n2;
            n2 = nextItems;
          
          //console.log(nextItems)
            
        }