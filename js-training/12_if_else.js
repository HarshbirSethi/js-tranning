// percentage
let maths=95
let physics=68
let chemistry=75
let english = 90
let cs=92
console.log(`Maths marks = ${maths}`);
console.log(`Physics marks = ${physics}`);
console.log(`Chemistry marks = ${chemistry}`);
console.log(`English marks = ${english}`);
console.log(`Computer marks = ${cs}`);
let percentage = (maths+physics+chemistry+english+cs)/5
console.log(percentage);
if (percentage>=90)
{
    console.log("A+");
}
else if (percentage>=80)
{
    console.log("A");
}
else if (percentage>=60)
{
    console.log("B");
}
else if (percentage>=50)
{
    console.log("C");
}
else if(percentage>=40)
{
    console.log("D");
}
else
{
    console.log("F");
}

// income tax

let income = 800000
console.log(`Annual income of the person = ${income}`);
if (income<=250000)
{
    console.log("Income Tax  = 0");
}
else if (income<=500000)
{
    console.log(`Income Tax = ${income*0.1}`);
}
else if (income<=1000000)
{
    console.log(`Income Tax = ${income*0.2}`);
}
else
{
    console.log(`Income Tax = ${income*0.4}`);
}

// electricity bill

let unit = 300
console.log(`Number of units = ${unit}`);
if (unit<=100)
{
    console.log("Electricity bill = 0");
}
else if (unit>100 && unit<=200)
{
    console.log(`Electricity bill = ${unit*1}`);
}
else if (unit>200 && unit<350)
{
    console.log(`Elecctricity bill = ${unit*1.5}`);
}
else 
{
    console.log(`Electricity bill = ${unit*2}`);
}

// Gross Salary

let basic_sal = 45000
let TA = basic_sal*0.1
let HRA = basic_sal*0.1
let DA=null
console.log(`Basic salary = ${basic_sal}`);
if (basic_sal<=10000)
{
    DA = basic_sal*0.1
}
else if (basic_sal<=20000)
{
    DA= basic_sal*0.15
}
else if (basic_sal<40000)
{
    DA = basic_sal*0.25
}
else
{
    DA = basic_sal*0.35
}
let gross_sal = basic_sal+TA+HRA+DA
console.log(`TA = ${TA}`);
console.log(`HRA = ${HRA}`);
console.log(`DA = ${DA}`);
console.log(`Gross salary = ${gross_sal}`);


// login

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

// balance

const balance = 1000

if (balance > 500) console.log("test"),console.log("test2");

if (balance < 500) 
{
    console.log("less than 500");
} 

else if (balance < 750) 
{
    console.log("less than 750"); 
} 
else if (balance < 900)
{
    console.log("less than 750");
}
else
{
    console.log("less than 1200");
}