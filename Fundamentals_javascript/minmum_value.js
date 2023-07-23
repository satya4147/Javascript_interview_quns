//find the number of occurrence of minmum value of the list

const num = [1,2,3,5,4,8,]
const minvalue = Math.min(...num)
const result = num.filter(ele => ele === minvalue);
console.log(result.length)



//7065008622