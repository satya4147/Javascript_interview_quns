
  let names = new Set();
  names.add("one")
        .add("two")
        .add("three")
        .add("one")
        .add("four")
 // console.log(names) // { 'one', 'two', 'three', 'four' } remove the duplicate values in Set mathod and "delete and clear mathod is working":

    for(let v of names){
      console.log(v)
    } // its also looping

    names.forEach((v1,v2,s)=>{
      console.log(`${v1} - ${v2}`)
    }) // its working  one - one two - two three - three four - four