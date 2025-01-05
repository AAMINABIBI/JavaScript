 //stack(pimitive datatypes)=>copy value,
 // Heap(Non Primitive datatypes)=>reference value

 const name="amna";
 name2=name;
 name2="haleema"

 console.log(name);
 console.log(name2)
 //value changes in copy,,original value is reserved

 let obj={
    user:"123",
    email:'amna2gmail.com'
 }

 obj2=obj;
 obj2.email="haleema@gmail.vom"
console.log(obj);
console.log(obj2);
//value cahnged in original value because of reference in non-primitive datatype

 