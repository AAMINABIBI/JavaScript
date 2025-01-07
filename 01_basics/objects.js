//singleton(Object through constructor)

//object literals
const user={
name:"ali",
id:1,
age:16,
location:"abc",
isLoggedin:false,
lastLogin:["mon","tuesday","sat"],

}

console.log(user.age)
console.log(user["age"])


user.isLoggedin=true;
user.greeting=function(){
    console.log("hello JS User")
}

user.greetingTwo=function(){
    console.log(`hello JS User ${this.name}`)
}
//contrctor method=>SIngleton
//Object.create()


/////////////////////////

const regularuser={}

regularuser.id="1bs23"
regularuser.name="ali"
regularuser.fulname={
    userfullname:{
        firstname:"ali",
        lastname:"ali"
    }
}

console.log(regularuser.fulname?.userfullname.firstname)
//? is just to chec wether full name exist or not

//merging objects

const obj1={1:"a",2:"b"}
const obj2={3:'c',4:'g'}
const obj3={4:"g",5:"t"}

//const 0bj={obj1,obj2,obj3}
const objct=Object.assign({},obj1,obj2,obj3)

//assign will merge two objects like merge in array
//{} => without bracket val of obj andobj1(target) wil be same to avoid this issue use {}
console.log(objct)


//using stread operator
const object={...obj1,...obj2,...obj3}



//objects in array

const userArray=[
    {key:1,name:"ali"},
    {key:2,name2:"abc"}
]

console.log(userArray[1].key)


//object.keys()==>ojets to get all the keys of obect
//object.values()==>ojets to get all the values of obect

