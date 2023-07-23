
  
  let char = "code is 456-123 and 123-789";
  let prtn = /(\d+)-(\d+)/;

   // let prtn2 = /(\d+)-\1/g;
   // let prt = /(?<zipcode>\d+)-(\k<zipcode>)/g
  console.log(char.match(prtn));