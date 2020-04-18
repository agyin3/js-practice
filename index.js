

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
// console.log(getName(restaurant))

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

const players = [
    {id: 1, name: "Kobe Bryant", team: "Lakers", position: "SG", status: "retired", years_active: "1996 - 2016"},
    {id: 2, name: "Damian Lillard", team: "Blazers", position: "PG", status: "active", years_active: "2012 - 2020"},
    {id: 3, name: "Isiah Thomas", team: "Pistons", position: "PG", status: "retired", years_active: "1981 - 1994"},
    {id: 4, name: "Michael Jordan", team: "Bulls", position: "SG", status: "retired", years_active: "1984 - 2003"},
    {id: 5, name: "Joel Embiid", team: "Sixers", position: "C", status: "active", years_active: "2014 - 2020"},
    {id: 6, name: "Lebron James", team: "Lakers", position: "PF", status: "active", years_active: "2003 - 2020"},
    {id: 7, name: "Kawhi Leonard", team: "Clippers", position: "SF", status: "active", years_active: "2011 - 2020"},
    {id: 8, name: "Giannis Antetokounmpo", team: "Bucks", position: "PF", status: "active", years_active: "2012 - 2020"},
    {id: 9, name: "Patrick Ewing", team: "Knicks", position: "C", status: "retired", years_active: "1985 - 2002"},
    {id: 10, name: "Larry Bird", team: "Celtics", position: "SF", status: "retired", years_active: "1979 - 1992"},
    {id: 11, name: "Shaq Oneal", team: "Lakers", position: "C", status: "retired", years_active: "1992 - 2011"},
    {id: 12, name: "Bill Russell", team: "Celtics", position: "C", status: "retired", years_active: "1956 - 1969"},
    {id: 13, name: "Steph Curry", team: "Warriors", position: "PG", status: "active", years_active: "2009 - 2020"},
    {id: 14, name: "James Harden", team: "Rockets", position: "PG", status: "active", years_active: "2009 - 2020"},
    {id: 15, name: "John Wall", team: "Wizards", position: "PG", status: "active", years_active: "2010 - 2020"},
    {id: 16, name: "Jimmy Butler", team: "Heat", position: "SF", status: "active", years_active: "2011 - 2020"},
    {id: 17, name: "Karl Malone", team: "Jazz", position: "PF", status: "retired", years_active: "1985 - 2004"},
    {id: 18, name: "Devin Booker", team: "Suns", position: "SG", status: "active", years_active: "2015 - 2020"},
    {id: 19, name: "Jayson Tatum", team: "Celtics", position: "SF", status: "active", years_active: "2017 - 2020"},
    {id: 20, name: "Magic Johnson", team: "Lakers", position: "PG", status: "retired", years_active: "1979 - 1991"},
]

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

// Task 7 

/* 
create a function called `removePlayer` that takes in two arguments
1. an array
2. the index of a player

This function should remove the player at the given index from the array
*/

/* 
STRETCH GOAL 

create a function called `removePlayerById` that takes in two arguments
1. an array
2. the id of a player

This function should remove the player with the given id from the array
*/ 
