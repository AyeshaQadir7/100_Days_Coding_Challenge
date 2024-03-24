//Question 04:Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
console.log(`"Imran Khan once said, "The more you study, the more you know; how less you know."`);
//Question 05:Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let famous_person = "Imran Khan";
let message = `${famous_person} once said, The more you study, the more you know; how less you know.`;
console.log(message);
//Question 06:Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// \t: adds tab space
// \n: adds to next line
let my_name = "\t\n Ayesha \t\n"; // this saves the name with whitespace 
console.log(my_name); // Shows the name with whitespace
console.log(my_name.trim()); // Shows the name without whitespace
export {};
