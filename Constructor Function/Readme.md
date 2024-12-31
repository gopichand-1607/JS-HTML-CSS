### JS Constructor function

- template / blueprint for object.
- special function in js to create object.

- to create custom object we use constructor function.



## this keyword

  in general this references to object (parent object)

  - it refers to owner objects..

  let person={
       name: "john",
        myName: function(){
            console.log(this.name);    //this refers to person objects.
                                      // john
       }
  }


  //alone this refers to global object (window object)

  In a function, this refers to the global object.

  In a object, this refers to owner object


<!-- let gopi= {
     name:"shiva",
      age:24,
} -->