

let arr = [2,4,8,6]
let res = arr.reduce((acc,current,index)=>{
    acc +=current;
    if(index === arr.length-1){
        return acc/arr.length
    }
    return acc
},0)
console.log(res)

let arr1 = [[45,90],[5,9],[2,4]]

let result = arr1.reduce((acc,current) =>{
    return acc.concat(current)
},[])
console.log(result)
//[ 45, 90, 5, 9, 2, 4 ]