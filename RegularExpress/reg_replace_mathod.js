

let str = "This mathod is working";
let newStr = str.replace('is','at');
let newStrn = str.replace(/is/g ,'at')
  console.log(newStr)  //"That mathod is working";

    console.log(newStrn) //"That mathod at working";