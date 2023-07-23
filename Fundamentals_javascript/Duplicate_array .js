//Remove All Duplicate array 

const num = [1,2,2,3,4,4,5,5]
  
/*const duplicate = (num)=>{
  return[...new Set(num)]
}
console.log(duplicate(num))

(OR)

function duplicatearray(num){

  const unquie = []
  num.forEach((item)=>{
  if(!unquie.includes(item)){
  unquie.push(item)
  }
  
  })
return unquie
}

console.log(duplicatearray(num))

(OR)

const removeDup = (num) =>{ 
return num.reduce((acc,element)=>{

  return acc.includes(element) ? acc : [...acc ,element]

},[])
  
}
console.log(removeDup(num))*/
//(OR)
const duplicateRemove = (arr) =>{
let dup = []
 for(let i=0; i<arr.length ; i++){

  if(dup.indexOf(arr[i]) === -1){
  dup.push(arr[i])
  }
}
return dup 
}

console.log(duplicateRemove(num))


const arr = ['apple','orange','apple','orange','mango','mango']

 function removeDuplicate(arr){

return arr.filter((item,index)=>arr.indexOf(item) === index)
  
}

console.log(removeDuplicate(arr))

  //for loop

  const arr1 = ['apple','orange','apple','orange','mango','mango'];

function duplicate(arr){
let dup = []
	for(let i=0 ; i<arr.length ; i++){
  
  for(let j= i+1 ; j<arr.length ; j++){
  if(arr[i] === arr[j]){
  	dup.push(arr[i])
  }
  }
  }
	return dup
}
console.log(duplicate(arr1))