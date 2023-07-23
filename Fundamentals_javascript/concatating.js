//concatating array

const num = [1,2]
const num1 = [3,4,5]
const num2 =[6,7,8,9]

function merageArray(num, num1){

  return [...num , ...num1,...num2]

}

const res = merageArray(num, num1,num2)
console.log(res)

// const res = num.concat(num1,num2)
