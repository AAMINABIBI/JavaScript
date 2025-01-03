//number ->2 to power of 53
//bigint
//string ->"
//boolean->true/false"
//null=>standalone value=>object
//undefines=>undefind
//symbol =>unique

console.log(typeof undefined);
console.log(typeof null);

//conversions of  operation
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


//nuber to bool
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