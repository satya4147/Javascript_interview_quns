//map mathod is find the match all element

const str = ['hello','world','welcome','javascript']
const result = str.map(Element=> Element.length>5)
console.log(result)
//ans : (4) [false, false, true, true]

const arr1 = [25,16,144,36]
const res = arr1.map(Element => Math.sqrt(Element))
console.log(res)
//ans : (4) [5, 4, 12, 6]


let arr = [
  {id : 1001 ,
  name : 'satya',
  },
   {id : 1002 ,
  name : 'kumar',
  },
   {id : 1003 ,
  name : 'bharathi',
  },
  {id : 1004 ,
  name : 'pushpa',
  },
]


  let res1 = arr.map(Element=>Element.name)
  console.log(res1)

