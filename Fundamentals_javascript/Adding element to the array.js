//Adding element to the array

const num =[1,2,3]
const append = (arr, el)=>{
//return[...arr,el] //this new array not modify the original array
	arr.push(el)
  return arr;
}
const result = append(num,4)
console.log(result)
console.log(num)