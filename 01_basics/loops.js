//for

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

//break & Continue

// while (condition) {
    
// }



// do {
    
// } while (condition);


//array specifc loop
//for-of

// const arr=[1,2,3,4,5]
//     for (const num of arr) {
//         console.log(num);
//     }




//maps=>Key-value pairs=>Unique values=>order 

// const map=new Map();
// map.set('IN','India')
// map.set('Gr','')


//loops on objects
//forin

//for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }


 //const coding=["js","py","ruby"]

// coding.forEach((item)=>{
//     console.log(item)
// })

//foreach doen=s not return any value so use filter
//filter

// const returnedVal=coding.filter((item)=>{
// return item.length==2//return is must=>return the item that will satisy this condition
// })


// console.log(returnedVal);



 //const myNum=[1,2,3,3455,655,3,43]

// const newNum=myNum.map((item)=>{
// return item+10
// })
// console.log(newNum)


//chaining

// const newNum=myNum
// .map((item)=>{
// return item*10
// }
// )
// .map((item)=>{
// return item+11;
// })

// console.log(newNum)

//reduce
const myNum=[12,34,43]

const total=myNum.reduce((acc,curentval)=>{
return acc+curentval
},0)
console.log(total)
