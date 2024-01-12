const myArr = [0,1,2,3,4,5] //number array - initialisation
const studentNames = ["Ram","Sham"]
console.table([myArr,studentNames])

const myArr2 = new Array(1,2,3,4)
//Array Methods
myArr.push(6)
myArr.push(7)
console.log(myArr)
myArr.pop() //deleting an element from last
console.log(myArr)
myArr.unshift(9) //placing the element at top.
console.log(myArr)
myArr.shift()//deleting an element from the top of an array..
console.log(myArr)
console.log(myArr.includes(9)) //check whether an element exists in an array or not.
console.log(myArr.indexOf(3)) //location of element is 3.
const mySlice = myArr.slice(0,5) //it will slice the elements from 0 to 4
console.log(mySlice)
const mySplice = myArr.splice(0,5) //it will delete the elements from 0 to 4
console.log(mySplice)
console.log(`After splicing the array ${myArr}`) //Tild sign 

let score1 = 100
let score2 = 200
let score3 = 300
//const scoreArray = new Array(score1,score2,score3)
console.log(Array.of(score1,score2,score3))

console.log(Array.isArray("Harshbir Singh")) //it will whther it is an array or not.
console.log(Array.from("Harshbir Singh")) //it will generate an array from the value
let Std_name={name:"Harhbir Singh"}
console.log(Array.from(Object.values(Std_name)));

const allArr = myArr.concat(myArr2)
console.log(allArr)


    

/*
The slice() method can be used to create a copy of an array or return a portion of an array. 
It is important to note that the slice() method does not alter the original array but instead creates a shallow copy.
Unlike the slice() method, the splice() method will change the contents of the original array
*/

const number=[1,9,8,2,6]
let max_value= Math.max(...number)
console.log(`Maximum number in the array = ${max_value}`);
console.log(`Minimum number in the array = ${Math.min(...number)}`);

let sort_array = number.sort()
console.log(sort_array)
console.log(sort_array.indexOf(9))

const Student_names=["Harshbir","Rajbir","Meharbir","Nikhil","Abhinav","Aarush"]
let sort_names = Student_names.sort()
console.log(Student_names);
Student_names.splice(0,3)
console.log(Student_names);
console.log(Student_names.includes("Rajbir"));

let sort_name = Array.from("Harshbir Singh");
console.log(sort_name.sort());

