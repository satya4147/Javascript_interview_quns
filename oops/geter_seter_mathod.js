
  class Vehicle{
      #_model = "";
      get model(){
       // console.log("Geter Mathod is exctuted....")
        return this.#_model;
      }
      set model(v){
        //console.log("seter Mathod is ...")
        if(v.length <3){
          this.#_model = "M" + v;

        }else{
          this.#_model = v;
        }
      }

  }

    const obj = new Vehicle();
    obj.model = "UV";
    console.log(obj.model)


  