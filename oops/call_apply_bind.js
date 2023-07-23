//call 

function test(...arg){
	console.log('hello world' + " " + this.a + arg) 
}

let obj = {
a : 5
}
test.call(obj , 'satya')
test.apply(obj,['venkat','satya','kumar'])

let bindFun = test.bind(obj)
bindFun('satya','bharathi','pushpa','vijju')



function test(...arg){
	console.log('well come' + " " + this.message() + " " + arg) 
}

let obj = {
	message:function(){
  return 'javascript'
  }
}
test.call(obj , 'satya')
test.apply(obj,['venkat','satya','kumar'])

let bindFun = test.bind(obj)
bindFun('satya','bharathi','pushpa','vijju')