const user={
    username:"Harshbir Singh",
    course:"Computer Science",
    welcomeMessage:function() //property as a function
    {
        console.log("Welcome to our collage");
    }
}
console.log(user)
user.welcomeMessage()

const printMessage = () => {
    console.log("Welcome to our collage");
}
printMessage()

const sum = (a,b) => {
    console.log(a+b);
}
sum(10,20)

num=[2,5,7,9,3,4]
const max = (num) => {
    console.log(`Maximum number = ${Math.max(...num)}`)
    console.log(`Minimum number = ${Math.min(...num)}`)
}
max(num)

const factorial = (n) => {
    if(n===0)
    {
        return 1;
    }
    else
    {
        return n*factorial(n-1)
    }
}
console.log(factorial(10))

const sum_num = (a) => {
    if(a>0)
    {
        return a+sum_num(a-1)
    }
    else
    {
        return a
    }
}
console.log(sum_num(10));

const fibonacci = (n) => {
    if(n < 2) {
        return n;
    }
    else {
        return fibonacci(n-1) + fibonacci(n - 2);
    }
}
for(let i = 0; i < 10; i++) {
    console.log(fibonacci(i));
}
