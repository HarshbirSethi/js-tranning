for (let i=1;i<10;i++)
{
    let element = i;
    if(i===5)
    {
        console.log("5 is my number");
    }
    console.log(element);
}

for (let i=1;i<=10;i++)
{
    console.log(`Outter loop ${i}`);

    for (let j=1;j<3;j++)
    {
        console.log(`Inner loop ${j}`);
    }
}
let myArray = ["mangao","banana","orange","litchi"]
for (let index=0;index<myArray.length;index++)
{
    const element = myArray[index];
    console.log(element);
}

for( let index=1;index<=20;index++)
{
    if(index==5)
    {
        
        break;
    }
    console.log(index);
}

for(let index=1;index<=20;index++)
{
    if(index==5)
    {
        continue;
    }
    console.log(index);
}

let cnt=1
a=23
function isPrime()
{
    for(let i=2;i<=8;i++)
    {
        if(a%i==0)
        {
            return `${a} is not a prime number`
        }
        if(cnt==1)
        {
            return `${a} is a prime number`
        }
    }
}
console.log(isPrime());
let i=16
if(i<=50)
{
    if(i%2==0)
    {
        console.log(`${i} is within the range`);
    }
    else
    {
        console.log(`${i} is not within the range`);
    }
}

let newArray = [1,4,6,2,3]
console.log(newArray);
let n=6
for (let i=0;i<n;i++)
{
    for(let j=1;j<(n-1);j++)
    {
        if(newArray[j-1]>newArray[j])
        {
            let temp= newArray[j-1]
            newArray[j-1]=newArray[j]
            newArray[j]=temp
        }
    }
}
console.log(newArray);

let thisArray = [2,6,3,9,0,12,7,5]
for(let i=0;i<=thisArray.length;i++)
{
    if(thisArray[i]===7)
    {
        console.log(`7 is found in ${i} cell `);
    }
}