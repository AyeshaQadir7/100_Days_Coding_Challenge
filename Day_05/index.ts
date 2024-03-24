//Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let transports: string[] = ["Toyota Fortuner", "Honda BRV", "Audi Q8"];
transports.forEach(transpot => {
    console.log(`I would like to own a ${transpot}.`);
});

//Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guests: string[] = ["Albert Einstein", "Elon Musk", "Bill Gates"];
guests.forEach(guest => {
    console.log(`Dear ${guest}, Would you like to join me for dinner?`);
});

//Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
let unableToAttend = "Albert Einstein";

//Replace the guest
let newGuest = "Jeff Bezos";
guests[guests.indexOf(unableToAttend)] = newGuest;

//New invitations
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`)
})
