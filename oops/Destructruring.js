
  let obj = {
    name : 'satya',
    age : 29,

  }
  const {name,age} = obj;
  console.log(name,age)

  // function Destrcturing 

    function test(){
      let obj1 = {
        name1 : 'satya',
        age1 : 29,
    
      }
      return obj1
    }

    let {name1,age1} = test();
    console.log(name1, age1)

    // destructuring default value is 0