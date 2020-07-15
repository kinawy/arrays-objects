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

//Objects referenced with the key: value pair, arrays with their index!!

//Objects

const sameh = {
    fullName: 'Sameh Kinawy',
    age:30,
    home: 'Boston',
    placesBeen: ['Egypt','Germany','Thailand']
}

sameh.alive = true;
console.log(sameh);

const insta = {
    user: 'sameh',
    password: '123',
    personalInfo: {
        name: 'sameh kinawy',
        age: 30,
        alive: true,
        standing: true,
        pets: {
            fluffy:{
                species: 'cat',
                toes: 20,
                fourLegs: true
            },
            sparky: {
                species: 'dog',
                toes: 21,
                fourLegs: true
            }
        }
    }
}
console.log(insta)

//insta post object

let sentence = "I'm Cool";
let sentence2 = 'I\'m cool too';
console.log(sentence2);

const fourthOfPost = {
    username: 'sk'
};

fourthOfPost.picture = 'https://instagram.com';
fourthOfPost['likes'] = 15;
fourthOfPost.comments = ['ok...'];
fourthOfPost.caption = 'writing code';
console.log(fourthOfPost);


// Functions//

//Function Declaration ES5

function sayHello() {
    console.log('Hello');
}

// Function Expression ES6

const sayHelloAgain = function () {
    console.log('Hello Again');
}

// Arrow Function 
const sayHiFinale = () => {
    console.log('Hello for the last time');
}

const numbers = [1,2,3,4,5,6,7,8,9];
const otherNumbers = [10,20,30,40,50,60,70,80,90];

function printNumbers(array) {
    for (let i = 0; i<array.length; i++) {
        let num = array[i];
        if (num < 50) {
            console.log('This number is less than 50: ' + num);
        } else {
            console.log(`${num} is greater than 50`);
        }
    }
}

printNumbers(numbers);
printNumbers(otherNumbers);