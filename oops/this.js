// this global window

console.log(this)



let a = 5;

	function text(){
  //console.log(this)//window object
  console.log(this.a)
  }
  console.log(text())
  
  let obj = {
   	text :(){
    console.log(this)//window
    }
  }
  
  
let obj = {
  test :()=>{
  console.log(this) //error
  }
  }
  console.log(obj)