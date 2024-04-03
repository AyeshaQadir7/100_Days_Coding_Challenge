//Question 28: Stages of Life: Determine a person’s life stage with an if-else chain.
let age: number = 1;

if (age < 2) {
    console.log("The person is a baby.");
}
else if (age < 4) {
    console.log("The person is a toddler.");
}
else if (age < 13) {
    console.log("The person is a kid.");
}
else if (age < 20) {
    console.log("The person is  a teenager.");
}
else if (age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder");
}

//Question 29: Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are included.
let favorite_fruit = ["Strawberry", "Orange", "Watermelon", "Mango", "Apple"];

if (favorite_fruit.includes("Strawberries")){
    console.log("You really like Starwberry!");
}
if (favorite_fruit.includes("Orange")){
    console.log("You really like Oranges");
}
if (favorite_fruit.includes("Watermelon")){
    console.log("You really like Watermelons");
}
if (favorite_fruit.includes("Mango")){
    console.log("You really like Mangoes");
}
if (favorite_fruit.includes("Apple")){
    console.log("You really like Apples");
}

//Question 30: Hello Admin: Greet users differently, especially 'admin'.Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
//If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let usernames: string[] = ["admin", "user1", "user2", "user3", "user4"];

usernames.forEach(username => {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});