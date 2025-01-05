let score=13
let number=new Number(13)//object
number.toString()
number.toFixed(2)//fix to 2 numbers in decimal

//no seprate datatype for decimal values


//**********************maths**********8 */
//libraray
console.log(Math.abs(-4))
console.log(Math.round(4.7))
console.log(Math.ceil(4.7))
console.log(Math.floor(4.7))
console.log(Math.sqrt(2))
console.log(Math.min(4,4,3,5,6,8))
console.log(Math.random())//always return between 0 and 1 =>multiply by 10 to get deccimal val ,add 1 to avoid 0
console.log((Math.random()*10)+1)//return 1 to 10 to get from 1 to 6 multiply by 6


//Important trick to get random numer between 2 values
let min=10
let max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)




