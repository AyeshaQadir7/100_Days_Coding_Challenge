//Question 22: Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing.
let friends: string[] = ["Alice", "Bob", "Charlie"];

console.log(friends[3]); // Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.
friends[2] = "Charlie"; // Correcting the error by accessing a valid index. 

//Question 23: Conditional Tests: Write a series of conditional tests. Predict the results of each test.
let country = 'Japan';
console.log("Is country === 'Japan' i predict True");
console.log(country === 'Japan'); //True

console.log("Is country === 'London' i predict False");
console.log(country === 'London'); //False

let car = 'Audi';
console.log("Is car === 'Audi' I predict True");
console.log(car === 'Audi'); //True

console.log("Is car === 'Toyota' I predict False");
console.log(car === 'Toyota') //False

let fruit =('Apple');
console.log("Is fruit === 'Apple' i predict True");
console.log(fruit === 'Apple') //True

console.log("Is fruit === Mango I predict False");
console.log(fruit === 'Mango'); //False

let color =('Black');
console.log("Is color === 'Black' i predict True");
console.log(color === 'Black') //True

console.log("Is color === 'Purple' I predict False");
console.log(color === 'Purple'); //False

let Animal =('Cat');
console.log("Is Animal === 'Cat' i predict True");
console.log(Animal === 'Cat') //True

console.log("Is Animal === Horse I predict False");
console.log(Animal === 'Horse'); //False

//Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.
//Equality with Strings
console.log("Testing equality with strings:");
console.log("apple" == "apple"); //True
// console.log("apple" == "Apple"); //False

//Using lower case function
console.log("Testing with lower case");
console.log("Apple".toLowerCase()=="apple"); //True

//Numerical Test
console.log("Numerical test:");
console.log(20 > 5); //True
console.log(3 < 1); //False

//Test using "and" & "or" operater
console.log("Test with'and' & 'or':")
console.log(true && false); //False
console.log(true || false); //True

//Test whether an item is in a array
let fruits = ["Apple", "Cherry", "Orange"]
console.log("is 'Apple' in fruits?");
console.log(fruits.includes("Apple"));//True

//Test whether an item is not in a array
console.log("is 'Mango' in fruits?");
console.log(fruits.includes("Mango")); //True