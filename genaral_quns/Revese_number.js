
let num = parseInt(prompt('Enter Number'))

	let rem = 0;
  let reverse_num = 0;
  
  while(num > 0){
  
  rem = num %10;
  reverse_num =	( reverse_num *10) + rem;
  num = parseInt(num/10);
  
};
console.log(reverse_num)

(OR)

let number = parseInt(prompt("Enter Number"));
  
let revese_num = 0;

revese_num = Number(String(number).split("").reverse().join(""))

console.log(number)
console.log(revese_num)

// arrow function reverse the number

const reverse_number = number => parseFloat(number.toString().split('').reverse().join(''));

console.log(reverse_number(123))