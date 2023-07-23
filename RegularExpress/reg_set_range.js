
  
      // set of charcter to be search in string
      const str = " i wonder this why winly";
      let prtn = /[wi]\w+/gi;
      console.log(str.match(prtn)) 
      
      //ans : ["i", "w", "i", "w", "w", "i"]
      
        const str1 = " i wonder this why winly";
      let prtns = /[wi]/gi;
      console.log(str1.match(prtns));
      
      //ans : ["wonder", "is", "why", "winly"]

      
       let str2 = " i wonder this the Winly";
        let pos =  /w[io]n/gi;
        console.log(str2.match(pos)) 

// Range [] is used to specify range ;

       
let str3= " i wonder this the Winly";
let posa =  /[i-o]/gi;
console.log(str3.match(posa));

//ans: ["i", "o", "n", "i", "i", "n", "l"]

let num = "123 456 85 758";
console.log(num.match(/[1-5]/g));

//ans : ["1", "2", "3", "4", "5", "5", "5"]

let char = "Well Come Javascrpt And Html Css React.js"
let prtn = /[A-Z]/g;
  console.log(char.match(prtn))
  
//ans : ["W", "C", "J", "A", "H", "C", "R"]

