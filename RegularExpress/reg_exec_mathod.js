

        let str = "this is how it is";
        let prtn = /is/g;

        console.log('last Index start :' + prtn.lastIndex)
        console.log(prtn.exec(str))
         console.log('last Index start :' + prtn.lastIndex)
        console.log(prtn.exec(str))
         console.log('last Index start :' + prtn.lastIndex)
        console.log(prtn.exec(str))
         console.log('last Index start :' + prtn.lastIndex)
        console.log(prtn.exec(str))

     
        let str1 = "this is how it is";
        let prtns = /is/g;  
          let result = "";

      while(result !== null){
        console.log('last index start : ' + prtn.lastIndex)
        result = prtns.exec(str1)
        console.log(result)
      }