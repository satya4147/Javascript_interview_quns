

const num = prompt('Enter Number')

	function checkPrime(num){
 	isPrime = true;
  
  	for(let i=2 ; i<num ; i++){
   	if(num % i ===0 ){
    	isPrime = false;
      break;
    }
    }
  	
    if(isPrime){
    console.log(`${num} is a prime Number`)
    }else{
     console.log(`${num} is not  a prime Number`)
    }
  return isPrime;
  }
  
  console.log(checkPrime(num))
  
  