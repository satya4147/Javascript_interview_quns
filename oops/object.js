
function Cart(){
  this.item = {
      name : 'iphone',
      des : 'iphone new 11pro',
      price : 50000
      
  }
}
let obj = new Cart();
console.log(obj)

// How to add behaviour to the data in an object;
// Data Encapsulation

let Product = {
  name : 'iphone',
  price : 40000,
  model : 14,
  Detalis : function(){
  	console.log('wellcome javascript')
  }
  }
  
console.log(Product.name);

//can you have dymanic key with object literal

let tv = 'iphone';
  
let Obj = {
[tv] :1001,
pname : 'iphone',
getData (){
console.log(Obj.iphone,Obj.pname)
}
}
Obj.getData();


//How can youn read-only propreties to an object 

const porot = Object.defineProperty({},'pcode',{
  writable : true,
  configurable : true,
  value : 1001,
  })
  const obj = Object.create(porot)
  obj.pcode = 3001;
  console.log(obj.pcode)

  //short hand with object literal;

	let code = 1001;
  let name = 'satya';
  
  	let Obj1 = {
    code,
    name,
    }
    console.log(Obj1)
  
    //what will be the out of this code ;

let obj2 = {a : 'first'}
let obj3 = obj2;
 obj3.a = 'seconds' ;
 
 console.log(obj2) //seconds

 //clone 

 let obj = {a:'first'}
 let obj1 = object.assign({}, obj)
      obj.a = 'seconds';
     
     console.log(obj.a) //first
