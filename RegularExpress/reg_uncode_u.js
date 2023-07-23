
  // unicode  is unversial set of charcter  used by all progrming various platforms and softweare application

  
  console.log('\ud83D\uDE00') //"😀"
  console.log('\ud83D\uDE01') //  "😁"

 /* \p takes unicode property  or symbol as an argument  "L" - letter , "N" - number , "S" -symbol;*/

  
    let str = 'this my face 😀 . Tell me how do look ! ';
     console.log(str.match(/\p{S}/gu)) //["😀"]

    console.log(str.match(/\p{L}/g)) // null
      console.log(str.match(/\p{L}/gu)) //["t", "h", "i", "s", "m", "y", "f", "a", "c", "e", "T", "e", "l", "l", "m", "e", "h", "o", "w", "d", "o", "l", "o", "o", "k"]
       console.log(str.match(/\p{L}\w+/gu)) //["this", "my", "face", "Tell", "me", "how", "do", "look"]

       
    const num  = " I found $300"
    console.log(num.match(/\p{Sc}/gu)) //$