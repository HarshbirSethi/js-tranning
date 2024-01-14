// object
const empDetails={
    "Name":"Harshbir Singh",
    age:18,
    "email":"harshbir2005@gmail.com",
    "isLoggedIN":false,
    "lastLoginDetails":["Monday","Wednesday"]
}
console.log(empDetails.Name);
console.log(empDetails.age);
console.log(empDetails.isLoggedIN);
console.log(empDetails.lastLoginDetails);

/*
If you want to make a function with an object
*/
empDetails.greeting = function()
{
    console.log("Happy Makar Sakranti - 2024 ");
    return "";
}
console.log(empDetails.greeting());