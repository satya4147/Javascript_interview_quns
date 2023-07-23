//get array of names form given array of users ?
//Get back only active users ?
//sort by age descending order ?

const users =[
{
id : 1,
name : 'satya',
isActive : true,
age :29,
},
{
id :2,
name : 'kumar',
isActive : true,
age : 31,
},
{
id : 3,
name : 'nani',
isActive : false,
age : 23
},
]

//object names code bignner level
/*const name = []
for(let i=0 ; i<users.length ; i++){
	name.push(users[i].name)
}*/

// active users and sorting age 
/*
	const name =[]
  name.sort((user1, user2) => user1.age < user2.age ? 1 : -1)
	for(let i=0 ; i<users.length ; i++){
  	if(users[i].isActive){
    name.push(users[i].name)
    }
  }
*/

	//forEach Mathod

/*	const name = []
  //name.sort((user1, user2)=>user1.age > user2.age ? 1 :-1)
  users.forEach((user) =>{
  	//name.push(user.name)
    if(user.isActive){
    name.push(user.name)
    }
  })*/
  
  //map Method
  const name =
  users.sort((user1, user2)=>user1.age < user2.age ? -1 : 1)
  //.filter((ele)=>ele.isActive)
  .map((user)=>user.name)

console.log(name);