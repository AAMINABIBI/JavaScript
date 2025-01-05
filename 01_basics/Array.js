const myArr=[1,2,3,4,5]

myArr.push(4)
console.log(myArr)
myArr.pop()
console.log(myArr)
myArr.unshift(9)
console.log(myArr);


const newWrr=myArr.join()//add to new array and convert that to string also....

//slice,splice

console.log("A:" ,myArr)

const new1=myArr.slice(1,3)
//slie will not add the range(last index) and wll return same original array
console.log(new1);
console.log("B:" ,myArr)

const new2=myArr.splice(1,3)
//splice will add te range and will remove the selected splice from the array
console.log(new2)
console.log("C:" ,myArr)



//combining 2 arrays
const arr1=["one","two","three"]
const arr2=["four","five","six"]

arr1.push(arr2);
console.log(arr1)//will ad arr2 as suarray on 3 index to access its element arr1[3][2]

//concat
const newArr=arr1.concat(arr2)
console.log(newArr)
//will join both array

//spread operator
//will spit the whole Array

const newArray=[...arr1,...arr2]
console.log(newArray)


console.log(Array.isArray("amna"))//will tell weather it is array or not

console.log(Array.from("amna"))//convert this string to array


