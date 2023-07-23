
      
    let str = "this is html javascript how is it ";
    console.log(str.split('is'))  // ["th", " ", " html javascript how ", " it "]
    
    let str1 = 'html1 css2 javascript3 react4 node.js5';
    console.log(str1.split(/\d/g))    //["html", " css", " javascript", " react", " node.js", ""]
    console.log(str1.split(/(\d)/g))   // ["html", "1", " css", "2", " javascript", "3", " react", "4", " node.js", "5", ""]

    let str2 = 'html1 css2 javascript3 react4 node.js5';
    console.log(str2.split(/\d/,3)); //["html", " css", " javascript"]