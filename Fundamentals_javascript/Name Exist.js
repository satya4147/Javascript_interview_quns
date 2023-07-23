//check if user with such Name Exist ;

const users = [
  {
  id:1,
  name : 'satya',
  isActive : true,
  age : 29
  },
  {
  id:2,
  name : 'kumar',
  isActive : true,
  age : 31
  },
  {
  id:3,
  name : 'Bharathi',
  isActive : false,
  age : 29
  },
  
  ]
  
  
 /* const name = users.map((user)=>user.name)
  console.log(name)
  
  function isNameExist(name,user){
  	let Exist = false
    
    for(let i =0 ; i<user.length ; i++){	
      	if(user[i].name === name){
        Exist = true
        }
    
    }
    	return Exist
  }
  
 console.log( isNameExist('satya',users))
 
 (OR)
 const isNameExist = (name,user) => user.some((user)=>user.name === name)
console.log(isNameExist('Nani' , users))

(OR)
const isNameExist = (name,user) =>{ 
user.find((user)=> user.name === name)
return Boolean(user)
}
console.log(isNameExist('satya',users))*/

const isNameExist = (name,user)=>{
const index = user.findIndex((user) => user.name === name)
return index >=0
}
console.log(isNameExist('satya',users))
  
  