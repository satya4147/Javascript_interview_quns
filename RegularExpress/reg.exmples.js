
  // 1. Validate that a string being with digit : 

  const str = "88 New Street";
  let prn = /^\d\w+/g;
  console.log(str.match(prn))
  
    let str2 = "99 New strings";
    let prtn = /^[0-9]\w+/g;
    console.log(str2.match(prtn))

    // 2. validate whether first string uppercase or not ;

      
    let str3 = "Hello world";
    let prtns = /^[A-Z]/;
    console.log(prtns.test(str3));

    // 3. validate that a string should have  a word containg only digits :

      const digit = "12345";
      let dprt = /\d+/g;
      console.log(digit.match(dprt))


      let digits = "23456800";
      let prtnd = /^[0-9]+$/;
      console.log(digits.match(prtnd));

// 4. validate that  a string should conatanin only letters : 

   
let lettr = "ancgdeds";
let lettprtn = /^[A-Za-z]+$/;
console.log(lettprtn.test(lettr))

let char = "abcdefghij";
  let charprtn = /\w+/g;
  console.log(char.match(charprtn));

// 5. validate for all uppercase charcter in string : 
  
let chars = "THE HELLO WORLD IN THIS COUNTRY";
let prtnsChar = /^[A-Z\s]+$/g
console.log(chars.match(prtnsChar))
 console.log(prtnsChar.test(chars));

 // 6. counting vowles and consonants in a string : 

    let vowleStr = "hello World";
    let vowlesprtn = /[aeiou]/gi;
    let consonantsPtn = /[^aeiou\s]/gi;
    console.log('vowlesCount :' + vowleStr.match(vowlesprtn).length)
    console.log('ConsonantsCount :' + vowleStr.match(vowlesprtn).length)
  
// 7. validate to find all the double words is string : 

    let double = "This is a a string test test";
    let doublePrtn = /(\w+)\s\1/g;
    console.log(doublePrtn.match(double))

// 8. Finding a word of spcefiy number of letter : 

let str4 = "You and I flying in the sky";
//let prt = /\b\w{3}\b/g;  ["You", "and", "the", "sky"]

  let prt = /\b\w{1}\b/gi; //["I"]
console.log(str4.match(prt))


  // 9. validate the date format i.e : 

  let date  = "23/07/2023";
  let dateprt = /^\d{1,2}\/\d{1,2}\/\d{4}$/g; 
  console.log(dateprt.test(date));


       let date1  = "23-07-2023";
  let dateprt1 = /^\d{1,2}[\/-]\d{1,2}[\/-]\d{4}$/g; 
  console.log(dateprt1.test(date1));


    // 10. validate the date format  : 

    let date2 = "23-feb-12";
    let datePrtn = /^(19|35)\d\d([-\s])(jan|feb|mar|apr|May|jun|jul|aug|spe|oct|nov|dec)([-\s])(0[1-9]|[12][0-9]|[3][01]$)/i;
    console.log(datePrtn.test(date2))


    // 11 . Email validation : 

      let email = "satya145@gmail.com";
      let prtE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
      console.log(prtE.test(email))
      //OR
      
      let email1 = "kumar1234gmail.com";
      let prty = /\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
      console.log(prty.test(email1))

  

    
      

