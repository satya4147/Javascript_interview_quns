
let product = new WeakMap();
let obj = {}
product.set( obj, '1001')
console.log(product.get(obj))

let products = new WeakSet();
	let obj = {};
  let obj1 = {};
  let obj2 = {}
  products.add(obj,'apple')
  products.add(obj1,'mango')
  console.log(products)