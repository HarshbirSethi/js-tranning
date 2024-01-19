arr= [1,2,3,4,5,6]

for (const num of arr)
{
    console.log(num);
}

let str="Harshbir Singh"
str= str.toUpperCase()
for(const vol of str)
{
    if(vol=="A"||vol=="E"||vol=="I"||vol=="O"||vol=="U")
    {
        console.log(vol);
    }
}

const map= new Map()
map.set("IN","INDIA")
map.set("USA","UNITED STATES OF AMERICA")
console.log(map);

for(const [key,value] of map)
{
    console.log(`${key} :- ${value}`);
}

const user = {

    name: 'John Doe',

    email: 'john.doe@example.com',

    age: 25,

    dob: '08/02/1989',

    active: true
};

// iterate over the user object

for (const key in user) {

    console.log(`${key}: ${user[key]}`);
}

/*
This for (..of) statement lets you loop over the
 data structures that are iterable such as Arrays, 
 Strings, Maps, Node Lists, and more
*/
/*
The JavaScript for (..in) statement loops through the
 enumerable properties of an object.
*/