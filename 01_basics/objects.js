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
//contrctor method
Object.create()