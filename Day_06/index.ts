//Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
let guests:string[]= ["Albert Einstein", "Elon Musk", "Bill Gates"];
console.log("Great News! i found a bigger dinner table!");
//Adding new guests
guests.unshift("Steve Jobs");
guests.splice(guests.length / 2, 0, "Jeff Bezos");
guests.push("Mark Zuckerberg");
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`)
})

//Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
console.log ("Unfortunately, I can only invite two people for dinner.");
while (guests.length > 2){
    let removedGuest = guests.pop();
    console.log(`Sorry ${removedGuest}, I can't invite you to dinner.`);
}
guests.forEach(guest => {
    console.log(`Dear ${guests}, you're still invited to dinner`);
})
guests.splice(0, guests.length);
    console.log(guests)// shows an empty list

//Question 18: Seeing the World: Think of at least five places you’d like to visit.
//Store the locations in a array. Make sure the array is not in alphabetical order
let places : string[] = ["Switzerland", "London", "Japan", "Turkey", "Singapore"];
//Print your array in its original order.
console.log("Original Order:", places);
//Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical Order:", [...places].sort());
//Show that your array is still in its original order by printing it.
console.log("Origianl Order:", places);
//Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Alphabetical order:", [...places].sort().reverse());
//Show that your array is still in its original order by printing it again.
console.log("Origianl Order:", places);
//Reverse the order of your list.
places.reverse();
console.log("Reversed Order:", places);
//Reverse the order of your list again.
places.reverse();
console.log("Original Order:", places);
//Reverse the order of your list again.
places.sort();
console.log("Alphabetical Order:", places);
//Sort to change your array so it’s stored in reverse alphabetical order.
places.reverse();
console.log("Reverse alphabetical order:", places);