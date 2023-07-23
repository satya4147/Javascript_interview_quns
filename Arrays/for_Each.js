const arr = ['ES6','ES7','ES8','ES9'];

	arr.forEach((element,index) =>{
  console.log(`${index} : ${element}`)
  })
 
 	for(let elemt of arr){
  console.log(elemt)
  }
  
  for(let element in arr){
    console.log(element)
  }


  const arr = [
    {
      id:1,
      name : 'satya',
      isActive : true,
    },
     {
      id:2,
      name : 'kumar',
      isActive : true,
    },
     {
      id:3,
      name : 'Nani',
      isActive : false,
    },
     {
      id:4,
      name : 'bharathi',
      isActive : false,
    },
        ];

     arr.forEach((ele)=>{
     if(ele.isActive === true){
      console.log(`${ele.id} : ${ele.name}`)
     }
     })

     for(let i=0 ; i<arr.length ; i++){
      console.log(arr[i].name)
     }