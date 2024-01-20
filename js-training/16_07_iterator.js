myNums=[1,2,3,4]
const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);

const shopingCart= [
    {
        "ItemName":"Iphone 12",
        "price":29999
    },
    {
        "ItemName":"Iphone 13",
        "price":39999
    },
    {
        "ItemName":"Iphone 14",
        "price":49999
    },
    {
        "ItemName":"Iphone 15",
        "price":59999
    }
]

const pricetopay = shopingCart.reduce((acc,item) => acc+item.price,0);
console.log(pricetopay);

const multi_array = [[1,3],[2,4],[5,7],[6,8]]

const new_array = multi_array.reduce((acc,val) => acc.concat(val),0 )
console.log(new_array);