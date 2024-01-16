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