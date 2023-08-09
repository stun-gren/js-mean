// Basic Copy 

// let obj1 = {
//     name: "Satvik"
// }

// let obj2 = obj1;

// console.log(obj2);

// The problem arises from here when we manipulate the object 

// obj2.name = "Mayank";

//We can see the entites in the 'obj1' Object is also changed so we're using Shallow Copy

// console.log(obj1);  



// ===================SHALLOW COPY===================

// There are two ways of shallow copy: 

// 1.

// let obj2 = Object.assign({}, obj1);

// obj2.name = "Mayank";

// console.log(obj2);

// Twist here
// console.log(obj1);

// You see nothings change in obj1 


// 2.
// We can use spread operator 

// let obj2 = {...obj1};

// obj2.name = "S4TAN";

// console.log("Copied one: ",obj2);
// console.log("Real one:",obj1);


/*
    Problem arises here that if there is nested object then shallow copy is no longer in use. So we'll use deep copy technique
*/

// var obj1 = {
//     name: 'Satvik',
//     address: {
//         street: 'Kallu Ka Purwa',
//         city: 'Lucknow'
//     }
// }

// var obj2 = {...obj1};

// obj2.address.city = "Raebareli";

// console.log("Copied one:",obj2);
// console.log("Original one:",obj1);

// We saw that both object changes, so we use:


// ===================DEEP COPY===================
// Firstly change object to string 

// var obj1 = {
//     name: 'Satvik',
//     address: {
//         street: 'Kallu Ka Purwa',
//         city: 'Lucknow'
//     }
// }

// var obj2 = JSON.parse(JSON.stringify(obj1))
// obj2.address.city = "Raebareli"

// console.log("Copied one:",obj2);
// console.log("Original one:",obj1);

// If there's been function instead of nested object, then we got that issue:

// var obj1 = {
//     name: 'Satvik',
//     address: function(){}
// }

// var obj2 = JSON.parse(JSON.stringify(obj1))
// obj2.address.city = "Raebareli"

// console.log("Copied one:",obj2);
// console.log("Original one:",obj1);


// We use "loadlash" library then in order to debug the issue: 

// var obj1 = {
//     name: 'Satvik',
//     address: () => {
//         return 0
//     }
// }

// var obj2 = _.cloneDEEP(obj1);

// console.log("Copied one:",obj2);
// console.log("Original one:",obj1);