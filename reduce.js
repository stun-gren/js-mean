const myNums = [1, 2, 3]

// const initialValue = 0

// const myTotal = myNums.reduce(function (acc, cur) {
//     return acc + cur
// }, 0)

const myTotal = myNums.reduce( (accumulator, currentValue) => {
    // console.log(`Accumulator is: ${accumulator} and Current Value is: ${currentValue}`);
    return accumulator-currentValue
},0)

// console.log(myTotal);


// Shopping Cart Example 

const shoppingCart = [
    {
        itemName: "Nvidea RTX 5090Ti 32GB",
        price: 399999
    },
    {
        itemName: "Intel Core i9® 13900K 4.09GHz",
        price: 199999
    },
    {
        itemName: "HyperX 128GB RAM DDR5 6500 MHz",
        price: 49999
    }

]

const sumTotal = shoppingCart.reduce((acc, item) => acc + item.price, 0)


console.log(`$ ${sumTotal}`);
