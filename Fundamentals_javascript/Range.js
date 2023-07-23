//Range of number

function rangeOfNumber(start,end){

	let result = []
	for(let i=start ; i<end ; i++){
  result.push(i)
  }
  return result
}

console.log(rangeOfNumber(1,50))

const range = (start,end) =>{
return [...Array(end-start).keys()].map((ele)=>ele  + start)
}

console.log(range(50,100))
