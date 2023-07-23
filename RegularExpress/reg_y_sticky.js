
    
  let str = "not easy otherwise to touch hot ";
  let prttn = /ot/g
  console.log(prttn.exec(str))

  //last Index also change the beginning of the search

    console.log("lastIndex" + prttn.lastIndex)
   console.log(prttn.exec(str))
    console.log(prttn.exec(str))
    
    
     let str1 = "not easy otherwise to touch hot ";
    let pos = /\w+/g;
    pos.lastIndex = 3;
    console.log(pos.exec(str1)) //["easy"]

    console.log(pos.exec(str1))//["otherwise"]

    // \y for exact position is used

    
    let str2 = "not easy otherwise to touch hot ";
    let poss = /\w+/gy;
    poss.lastIndex = 3;
    poss.lastIndex = 4;
    console.log(poss.exec(str2)) //["null"]
    console.log(poss.exec(str2)) //["easy"]


