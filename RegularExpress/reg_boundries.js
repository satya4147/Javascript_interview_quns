
  // \b is like a Anchor 

  

  let str = "testing test a testfy";
  let prtn = /test/g;
  console.log(str.match(prtn)) //["test", "test", "test"]
  
    let char = "testing test a testfy";
    let pttn = /\btest\b/g; 
    console.log(char.match(pttn)) //[test]