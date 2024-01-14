function sayHello()
{
    console.log("Hello");
}
sayHello()

function addNumber(number1,number2)
{
    let result = number1+number2
    return result;
}
console.log(addNumber(10,20));

function logInUserName(username="Harshbir")
{
    if(!username)
    {
        console.log("Please enter a username");
        return
    }
    else
    {
        return `${username} is LoggedIn`
    }
}
console.log(logInUserName("Pramjit"));

function calculateStockPrices(val1,val2,...valn)
{
    return valn;
}
console.log(calculateStockPrices(200,400,600,800,1000));

function calculateStockPrices2(...valn)
{
    return valn;
}
console.log(calculateStockPrices2(200,400,600,800,1000));

const myNewArray= [200,300,400,600,700,800]
function returnArray(getArray)
{
    return getArray[1];
}
console.log(returnArray(myNewArray));

//handleObject
function handleobject(anyobject)
{
    console.log(anyobject)
}
//passing an anonymous object at function call...
handleobject(
    //passing an object 
    {
        username:"Harshbir Singh",
        course:"btech"
    }
)