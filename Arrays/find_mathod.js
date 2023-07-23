
//find mathod is find the only first matching element

const arr2 = [1200,1500,1000,2000,3000,4000]
let res = arr2.find(function(element){
   return element > 2000
})
console.log(res)


const str = ['hello','world','welcome','javascript']
const result = str.find(Element=> Element.length>5)
console.log(result)

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

let res = arr.find((ele)=>{
return ele.id> 1
// return ele.isActive >1 //undefined

})


console.log(res)