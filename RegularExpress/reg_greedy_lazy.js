
// Greddy and Lazy_behavior;

// "/.+/ - Greedy Quantifier  /.+?/ - lazy-Quntifier";

 
let str = "javascript 'Es6' and 'Es7' React 18.0 ";
         
console.log(str.match(/'.+'/g)) //["'Es6' and 'Es7'"]
 console.log(str.match(/'.+?'/g))//["'Es6'", "'Es7'"]