import { players } from './data.js'

/* OBJECTS PRACTICE */


// Task 1
/* 

Create a new object called restaurant that includes:

name
cuisine_type
city
rating

*/

// Task 2

/* 
Create a function called 'getName' that accepts an object as a parameter 
and returns the name of the restaurant
*/

function getName(/* code here */){

    /* code here */

}

/* Uncomment the console.log() to check your work */
// console.log(getName(resturant))

// Task 3 

/* 
Look at the bestRestaurant variable below. And complete the following tasks

Add an owner property with the value of 'Gordon Ramsey'
Change the name to 'Zest Kitchen'
Change the cuisine_type to 'American'
*/

let bestRestaurant = {
    name: 'Mr. Shabu',
    cuisine_type: 'Asian',
    rating: 5,
    city: 'Salt Lake City'
}

/* Uncomment the console.log() to check your work */
// console.log(bestResturant.owner) // 'Gordon Ramsey'
// console.log(bestRestaurant.cuisine_type) // 'American'
// console.log(bestRestaurant.city) // 'American'

// Task 4

/* 

Create a function 'whereToEat' that takes in two arguments
1. a restaurant object
2. a cuisine type

If the restaurant's cuisine type is the same as the cuisine type passed in 
return the string `Just made reservations at ${name}`

If it doesn't return the string `Looks like I'll be cooking tonight`
*/

let shabu = {
    name: 'Mr. Shabu',
    cuisine_type: 'Asian',
    rating: 5,
    city: 'Salt Lake City'
}

let alberto = {
    name: 'Casa de Alberto',
    cuisine_type: 'Mexican',
    rating: 3,
    city: 'Los Angeles'
}

let curryHouse = {
    name: 'Bombay House',
    cuisine_type: 'Indian',
    rating: 5,
    city: 'Phoenix'
}

function whereToEat(/* code here */){

    /* code here */
}


/* Uncomment the console.log() to check your work */
// console.log(whereToEat(shabu, 'Mexican')) // `Looks like I'll be cooking tonight`
// console.log(whereToEat(curryHouse, 'Indian')) // `Just made reservations at Bombay House`
// console.log(whereToEat(alberto, 'Mexican')) // Just made reservations at Casa de Alberto`

// Task 6 

/* 
Write a loop for the 'burgerJoint' object what will 
console.log() the value of each key
*/

let burgerJoint = {
    name: 'In-N-Out',
    cuisine_type: 'American',
    rating: 5,
    city: 'Corona'
}

// Task 5 

/* 
Objects can have key-values pairs where the value is a function. This is called a method. 

Create a function 'createRestaurant' that takes in four arguments
1. name
2. cuisine type
3. city
4. rating

This function should return an object that includes the following
1. name of the restaurant
2. cuisine type
3. city restaurant is located
4. a 'increaseRating' method that increases the restaurants rating if it is below 5
5. a 'decreaseRating' method that decreases the restaurants rating if it is above 0 
*/

function createRestaurant(/* code here */){

    /* code here */

}

// let tester = createRestaurant('Pizza World', 'Italian', 'Austin', 2)

// tester.increaseRating()  
// tester.increaseRating()  
// console.log(tester.rating) // 4
// tester.decreaseRating() 
// console.log(tester.rating) // 3



/* ARRAYS PRACTICE */

/* 
LOOK THROUGH THE DATA PROVIDED IN ./data.JS. YOU'LL SEE THAT IT IS AN ARRAY OF PLAYER OBJECTS.
BELOW ARE SOME PRACTICE PROBLEMS TO HELP YOU REVIEW YOUR JAVASCRIPT SKILLS
*/

// Task 1

/*
Create a function 'getPlayerById' which takes in two arguments
1. an array
2. the id of a player

This function should then return the following string `${name} is a ${position} for the ${team}`
*/

function getPlayerById(/* code here */){

    /* code here */

}

/* Uncomment the console.log() to check your work */
// console.log(getPlayerById(players, 16)) // `Jimmy Butler is a SG for the Heat`
// console.log(getPlayerById(players, 1)) // `Kobe Bryant is a SG for the Lakers`
// console.log(getPlayerById(players, 9)) // `Patrick Ewing is a C for the Knicks`


// Taks 2 

/* 
Create a function `getPlayersByTeam` that takes in two arguments
1. an array 
2. the name of a team

The function should return a new array with the names of the players for that team
*/

/* Uncomment the console.log() to check your work */
// console.log(getPlayersByTeam(players, 'Lakers')) // ['Kobe Bryant', 'Lebron James', 'Shaq Oneal', 'Magic Johnson']
//console.log(getPlayersByTeam(players, 'Spurs')) // []

// Task 3 

/* 
The player with id 7, Kawhi Leonard, has been traded from the 'Clippers' to the 'Magic'. Use an array method to update his team. Use console.log() to check your work
*/

// Task 4 

/* 
Create a function 'getPlayersByDraft' that takes in three arguments.
1. an array
2. a minimum draft year
3. a maximum draft year

This function should return the number of players drafted within those years
*/


/* Uncomment the console.log() to check your work */
// console.log(getPlayersByDraft(players, 1994, 2005)) // 2
// console.log(getPlayersByDraft(players, 1951, 1991)) // 7
// console.log(getPlayersByDraft(players, 2008, 2012)) // 5 

// Task 5

/* 
Create a function 'addNewPlayer' that takes in
an array of players and a player object. 
This function should add the player to the end of the array
*/

// Task 6 

/* 
Uh oh, we forgot to add a player the player with id 0 t
o the beginning of the players array. Use an array method 
to add 'anthony' to the beginning of the array. Use 
console.log to check your work
*/

let anthony = {
    id: 0,
    name: 'Anthony Davis',
    team: 'Lakers',
    position: 'PF',
    status: 'active',
    years_active: '2012 - 2020'
}

