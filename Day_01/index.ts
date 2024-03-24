//Question 01: Install Node.js, TypeScript and VS Code on your computer

//Question 02: Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let person_name : string = "Ayesha"
console.log(`Hello ${person_name} would you like to learn some TypeScript today? `);

//Question 03:Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName: string = "Steve Jobs"
console.log(personName.toUpperCase()); // shows in all big letters
console.log(personName.toLowerCase()); // shows the name in small letters
console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());// shows first letter big
