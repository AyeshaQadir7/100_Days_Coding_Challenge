//Question 25: Alien Colors #1: Imagine an alien was just shot down in a game. Assign 'green', 'yellow', or 'red' to a variable called alien_color.
let aliencolor = "green";
if (aliencolor == "green") {
    console.log("You just earned 5 points!");
}

//Question 26: Alien Colors #1: Imagine an alien was just shot down in a game. Assign 'green', 'yellow', or 'red' to a variable called alien_color.
// Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
//Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
//Version that runs the if block:
let alien_color = 'Green';
if(alien_color === 'Green'){
    console.log("you just earned 5 points");
}
//Version that runs the else block:
let alienColor = 'Yellow';
if (alienColor === 'Green'){
    console.log("you just earned 5 points for shooting the alien");
}
else{ 
    console.log("You earned 10 points");
}

//Question 27: Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.
//Write three versions of this program, making sure each message is printed for the appropriate color alien.
//Green alien version:
let Alien_Color_G ='Green';
if (Alien_Color_G === 'Green'){
    console.log("you just earned 5 points");
}
else if (Alien_Color_G === 'Yellow'){
    console.log("you just earned 10 points");
}
else if (Alien_Color_G === 'Red'){
    console.log("you just earned 15 points");
};

//Yellow alien version:
let Alien_Color_Y ='Yellow';
if (Alien_Color_Y === 'Green'){
    console.log("you just earned 5 points");
}
else if (Alien_Color_Y === 'Yellow'){
    console.log("you just earned 10 points");
}
else if (Alien_Color_Y === 'Red'){
    console.log("you just earned 15 points");
};

// //Red alien version:
let Alien_Color_R ='Red';
if (Alien_Color_R === 'Green'){
    console.log("you just earned 5 points");
}
else if (Alien_Color_R === 'Yellow'){
    console.log("you just earned 10 points");
}
else if (Alien_Color_R === 'Red'){
    console.log("you just earned 15 points");
};
