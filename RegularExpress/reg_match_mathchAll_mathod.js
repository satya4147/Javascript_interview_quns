

// Match Mathod : 

  let str = 'this is how it is to';
    let p = /is/g;
    console.log(str.match(p))

    //ans : ["is", "is", "is"]
  
    let str1 = 'this is how it is to';
    let pt = /es/g;
    console.log(str1.match(pt))

    // ans : null  (returns null no match is found)

    // Match all Mathod : 

    let str2 = 'this is how it is to hour this';
    let prtn = /is/g;
    let obj = str2.matchAll(prtn);

      for(let ele of obj){
        console.log(  ele[0] + ' Found at : ' + ele.index)
      }

    /*  ans : 
"is Found at : 2"
"is Found at : 5"
"is Found at : 15" 
"is Found at : 28" */

