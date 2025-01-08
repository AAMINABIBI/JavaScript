///How javascript executes the file
//sab se ppahly golbal execution hoga jis mn this assign hoga
//thn memory phase =>just allocate the memory to variables
//Execution phase =>Starts execution =>Perform operations on variables


let var1=3;
let var2=10;

function addNum(num1,num2){
    let total=num1+num2;
    return total
}
let result=addNum(var1,var2)

//golbal Execution phase=>this varriable
///Memory execution phase
//var1=undefines
//var2=undefined
//addnumber=>is ka seprate memory phase and execution phase hoga

//excution phase
//var1=3
//var2=10
//performs te execution


//JS exection follow Stack Execution=>LIFO


