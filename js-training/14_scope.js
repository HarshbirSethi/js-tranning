a = 300
if(true)
{ //scopes means with in the curly braces..
    let a=10
    console.log(`INNER = ${a}`)
}

function one()
{
    const username= "Harshbir Singh"
    function two()
    {
        const website= "youtube.com"
        console.log(username);
    }
    // eroor statement , not under scope console.log(website);
    two()
}
one()