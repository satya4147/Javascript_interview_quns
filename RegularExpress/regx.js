
const str = 'this is test string';
let prtn = /is/
console.log(str.search(prtn)); //index number = 2


let str1 = "this is Case Senstive";
let prtn = /case/i // case-senstive
console.log(str1.match(prtn))

let str1 = "this is Case and case Senstive";
let prtn =  RegExp("case" , "gi")// i-case-senstive , g-golbal element
console.log(str1.match(prtn))