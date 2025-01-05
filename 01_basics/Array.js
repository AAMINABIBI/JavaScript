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
