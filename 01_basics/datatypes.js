//number ->2 to power of 53
//bigint
//string ->"
//boolean->true/false"
//null=>standalone value=>object
//undefines=>undefind
//symbol =>unique

console.log(typeof undefined);
console.log(typeof null);

//****************************conversions of  operation****************8
//string to number
let score="33";
let newNum=Number(score)
console.log(score);
console.log(typeof(score))
console.log(newNum)
console.log(typeof(newNum))

//"33"=>33
//"33abc"=>NaN
//true=>1,false=>0


//number to bool
const isLoggedIn=1
let boolLoggedin=Boolean(isLoggedIn)
console.log(isLoggedIn)
console.log(boolLoggedin)
//1=>true,0=>false
//""=>false
//"aman"=>true

//numbber to string
let number=33
let stringNum=String(number)
console.log(typeof stringNum)


//*********operation********* */
 
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2%2)
console.log("1"+2+2)
console.log(2+2+"2")
//postfix & prefix


//************comparison************* */


//== & === wrks differently
//comparasion (<,>,<=,>=) and == works differently

//confusion
console.log("2">1)

console.log(null==0)
console.log(null<=0);
console.log(null>0);

//=== strict check =>check datatype
consol.log("2"===1)


//**************************daatypes summary


//Datatypes are classified on tha basis of memory
//primitive(value based)
//7 Numeber,Symbol,Booloean,Null,Undefined,String

const id=Symbol(123)
const anotheeID=Symbol(123)
console.log(id===anotheeID)//return false as symbol always return a unique value
//Non_Primitive(refernce based)
//Array,Object,Functions

const myArr=["111","2222","333"]
const myobj={
    //key:value pair
    name:"amma",
    age:13
}


const myFunc=function(){

}

const type=typeof(myArr)//to check the type of any variable
//type of null is always object
//type of non-primitive datatype is mostly object