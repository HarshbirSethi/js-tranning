const instaUser={}
instaUser.id = "123abc"
instaUser.name = "harshbir005"
instaUser.isLoggedIn = true

console.table(instaUser)

const regularUser= {
    "email":"param2233@gmail.com",
    fullname:{
        "firstname":"param",
        "lastname":"2233"
    }
}

// accessing nested object property
console.log(regularUser.fullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

const obj3 = {...obj1,...obj2}
console.log(obj3);

//object array..
const users = [
    { //0 location
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"c@gmail.com"
    }

]
console.log(users[1].email); //it will access first location object.

console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));

const course = {
    coursename:"js"
}
//const.courseinstructor
const {courseinstructor:instructor} = course
course.courseinstructor = "Harshbir "
console.log(course);

const teachers = [
    {
        id:1,
        name:"Krishna",
        subject:"English"
    },
    {
        id:2,
        name:"Ajoy",
        subject:"Mathematics"
    },
    {
        id:3,
        name:"paramjit",
        subject:"Computer Science"
    },
    {
        id:4,
        name:"Nisha",
        subject:"Physics"
    }
]

console.table(teachers)
console.log(Object.keys(teachers));
console.log(Object.values(teachers));
console.log(Object.entries(teachers))