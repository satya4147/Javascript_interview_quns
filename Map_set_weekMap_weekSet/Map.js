
  /*let product = new Map()
  product.set("1","apple")
  product.set("2","banana")
  product.set("3","orange")
  product.set("4","Mango")
  // product["5"] = "Kiwi" ; // this not firable for the is map
  console.log(product)*/


  // another is chaing this Maping :

      let products = new Map()
      products.set('1','Orange')
              .set('2','Apple')
              .set('3','Mango')
              .set('4','kiwi')
              .set('5','banana')
   /* console.log(products)
      products.delete('5','banana'); // delete this product in map
      console.log(products); 
    products.clear() // total map is empty in this "clear Mathod" in map
    console.log(products)*/

// values and keys and entries() Mathod : 
  // values - only values is displyed 
  // keys  - only keys is displayed ;
  //entries Mathod - value and keys is displayed : 

   /* for(let v of products.values()){
      console.log(v) /*Orange Apple Mango kiwi banana*/
    //}*/

   /* for(let k of products.keys()){
      console.log(k) // 1 2 3 4 5 
    }*/

    for(let [k,v] of products.entries()){
      //console.log(e)
      console.log(`${k} - ${v}`)
    }

    // Object.entries() - covent into simple arry format :

      let obj2 = {
        pCode : 1001,
        pName : 'IPhone',
        price : 140000
      }

      const arr = Object.entries(obj2);
      console.log(arr) //[ [ 'pCode', 1001 ], [ 'pName', 'IPhone' ], [ 'price', 140000 ] ]

    const objItr = new Map(Object.entries(obj2))
    console.log(objItr) //{ 'pCode' => 1001, 'pName' => 'IPhone', 'price' => 140000 }

    // Object.Formentries() - a map can be covernted  into simple object also :

      
    let producr = new Map()
    producr.set('1','Orange')
            .set('2','Apple')
            .set('3','Mango')

      console.log( producr.has("ornage")) //false
     
    
    const simpleobj = Object.fromEntries(producr.entries())
    console.log(simpleobj) //{ '1': 'Orange', '2': 'Apple', '3': 'Mango' }

      producr.forEach((k,v,m)=>{
        console.log(`${k} - ${v} `)
      })