//Question 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
//Ayesha 23/3/24
//This program prints a personal message
let myName = "Ayesha";
console.log(`Hello ${myName}, would you like to learn some typescript today?`);
//Question 11: Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let personsName = ["Alice", "Bob", "Charlie"];
for (let i = 0; i < personsName.length; i++) {
    console.log(personsName[i]);
}
//Question 12: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name
let names = ["Alice", "Bob", "Charlie"];
for (let name of names) {
    console.log(`Hello ${name}, would you like to learn some typescript today?`);
}
export {};
