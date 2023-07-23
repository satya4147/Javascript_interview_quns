
  //Dot . Search all the charcter except  for new line ;


const dot = 'this Wonder it is windiy';
	let prtn = /w.n\w+/gi;
  let pos = dot.match(prtn);
  console.log(pos);



  const dot = 'this wo\nnders the windily' ;  // \n new line not excet the . 
	let prtn = /w.n\w+/gi;
  let pos = dot.match(prtn);
  console.log(pos); //[windily] 

  let str = 'this Wo\nnder and is winly';
  let ptrn = /w.n\w+/gs; // s-remove the white space and \n new line
	console.log(str.match(ptrn))

  
  let str1 = 'this is what is this string ';
  let prt = /.h\w+/g
  console.log(str1.match(prt))

  
  let str3 = 'hello hola';
  let ptrnss = /h.l/gs;
    console.log(str.match(str3))