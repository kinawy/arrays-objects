console.log("hello");

let name = 'Sameh';

let home = 'Boston';

let fav = 5;

let favTeams = ['celts', 'lakers', 'barca', 'liverpool', 'bruins'];

let number = 10;
let otherNumber = 1;

// This means while otherNumber is less than number, add one to otherNumber.
while (otherNumber < number) {
    otherNumber=otherNumber+1;
    console.log(otherNumber);
}



let numberTwo = 20;
let myOtherNumber = 10;

// This means while myOtherNumber is less than numberTwo, add one to myOtherNumber.
while (myOtherNumber<numberTwo) {
    myOtherNumber +=1;
    console.log(myOtherNumber);
}

let samehFave = 13;
let goTo100 = 100;

while (samehFave<goTo100) {
    samehFave+=1; //This is a counter that will take my fave up too 100
}
console.log(samehFave);


// For Loops, extra practice

for (let i=0; i<10;i++) {
    console.log(i); //0,1,2,3,4,5,6,7,8,9
}

//print teams
for (let i = 0; i<favTeams.length; i++) {
    let eachTeam = favTeams[i];
    console.log(eachTeam);
}