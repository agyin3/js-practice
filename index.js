
/* OBJECTS PRACTICE */


// Task 1
/* 

Create a new object called restaurant that includes:

name
cuisine_type
city
rating

*/

let restaurant = {
    name: "Denny's",
    cuisine_type: 'American',
    city: 'Shirley',
    rating: 3
}

let restaurant2 = {
    name: "IHop",
    cuisine_type: 'American',
    city: 'Shirley',
    rating: 3
}


console.log(restaurant)

// Task 2

/* 
Create a function called 'getName' that accepts an object as a parameter 
and returns the name of the object
*/

// parameters are just placeholders for whatever argument 
// we pass into our function once we invoke it

function getName(restaurant){

    return restaurant.name

}

/* Uncomment the console.log() to check your work */
console.log(getName(restaurant2))

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

// On line 70 we are creating the property, 'owner', 
// inside of our bestRestaurant object and assigning 
// it the value of 'Gordon Ramsey'
bestRestaurant.owner = 'Gordon Ramsey'
bestRestaurant.name = 'Zest Kitchen'
bestRestaurant.cuisine_type = 'American'

/* Uncomment the console.log() to check your work */
console.log(bestRestaurant)
// console.log(bestRestaurant.owner) // 'Gordon Ramsey'
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

// anytime you see that you will need to do some type of comparision
// or conditional inside of your function you will most likely 
// be using an if/else statement 

function whereToEat(restaurant, cuisine){

    if(restaurant.cuisine_type === cuisine){
        return `Just made reservations at ${restaurant.name}`
    }else{
        return `Looks like I'll be cooking tonight`
    }
}


/* Uncomment the console.log() to check your work */
console.log(whereToEat(shabu, 'Mexican')) // `Looks like I'll be cooking tonight`
console.log(whereToEat(curryHouse, 'Indian')) // `Just made reservations at Bombay House`
console.log(whereToEat(alberto, 'Mexican')) // Just made reservations at Casa de Alberto`

// Task 5 

/* 
Write a loop for the 'burgerJoint' object that will 
console.log() the value of each key
*/

let burgerJoint = {
    name: 'In-N-Out',
    cuisine_type: 'American',
    rating: 5,
    city: 'Corona'
}

// We are used to seeing for loops used with arrays. You can also 
// use for loops with Objects with something called a for-in loop
// Their syntax is a little bit different than the traditional 
// for loop. They will look something like this: 

/* 
    for(let key in object){
        // some code
    }

    key will be the properties on the object
    object is the object you want to iterate over
*/

for(let key in burgerJoint){
    console.log('key', key)
    console.log('value', burgerJoint[key])
}


// Task 6

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
4. rating
5. a 'increaseRating' method that increases the restaurants rating if it is below 5
6. a 'decreaseRating' method that decreases the restaurants rating if it is above 0 
*/


function createRestaurant(name, cuisine, city, rating){
    // returns an anonymous object
    return {
        name,
        cuisine,
        city,
        rating,
        increaseRating(){
            /* In a method, `this` refers to the owner object. */
            // we need to utilize the `this` keyword to specifiy we want to reference the rating key of the object
            // and not the rating variable that is being passed into the function
            if(this.rating < 5){
                return this.rating+=1
            }else{
                return this.rating
            }
        },
        decreaseRating(){
            if(this.rating > 0){
                return this.rating -=1
            }else{
                return this.rating
            }
        }
    }
}

// Here we are setting our returned object as the value of tester
let tester = createRestaurant('Pizza World', 'Italian', 'Austin', 2)
console.log(tester)
tester.increaseRating()  
tester.increaseRating()  
console.log(tester.rating) // 4
tester.decreaseRating() 
console.log(tester.rating) // 3



/* ARRAYS PRACTICE */

/* 
LOOK THROUGH THE FOLLOWING PLAYERS VARIABLE PROVIDED BELOW. YOU'LL SEE THAT IT IS AN ARRAY OF PLAYER OBJECTS.
YOU'LL BE WORKING WITH THIS ARRAY FOR THE FOLLOWING TASKS TO HELP YOU REVIEW YOUR JAVASCRIPT SKILLS
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

// When working with arrays, anytime you see that you will need to do some type
// of comparison or conditional, you will almost always be working with a 
// for loop and if/else statement

function getPlayerById(players, id){

    for(let i=0; i<players.length; i++){
        // here we are checking if the id of the player at index `i` 
        // equals the id that is passed into the function
        if(players[i].id === id){
            return `${players[i].name} is a ${players[i].position} for the ${players[id].team}`
        }
    }

}

/* Uncomment the console.log() to check your work */
console.log(getPlayerById(players, 16)) // `Jimmy Butler is a SG for the Heat`
console.log(getPlayerById(players, 1)) // `Kobe Bryant is a SG for the Lakers`
console.log(getPlayerById(players, 9)) // `Patrick Ewing is a C for the Knicks`


// Taks 2 

/* 
Create a function `getPlayersByTeam` that takes in two arguments
1. an array 
2. the name of a team

The function should return a new array with the names of the players for that team
*/

function getPlayersByTeam(arr, team){
    const newArray = []

    for(let i=0; i<arr.length; i++){
        // here we are checking if the team of the player at index `i` 
        // equals the team that is passed into the function
        if(team === arr[i].team){
            newArray.push(arr[i].name)
        }
    }
    return newArray
}

/* Uncomment the console.log() to check your work */
console.log(getPlayersByTeam(players, 'Lakers')) // ['Kobe Bryant', 'Lebron James', 'Shaq Oneal', 'Magic Johnson']
console.log(getPlayersByTeam(players, 'Spurs')) // []

// Task 3 

/* 
The player with id 7, Kawhi Leonard, has been traded from the 'Clippers' to the 'Magic'. Use an array method to update his team. Use console.log() to check your work
*/

/* 
    BOTH SPLICE AND SLICE WILL RETURN AN ARRAY

    SLICE => DOES NOT ALTER THE ORIGINAL ARRAY

    SLICE TAKES TWO ARGUMENTS

    Argument 1: Required. An integer that specifies where to start the selection (The first element has an index of 0). Use negative numbers to select from the end of an array.

    Argument 2: Optional. An integer that specifies where to end the selection but does not include. If omitted, all elements from the start position and to the end of the array will be selected. Use negative numbers to select from the end of an array.

    SPLICE => REMOVES THE SPECIFIED ITEMS FROM THE ARRAY 

    SPLICE TAKES THREE ARGUMENTS 

    Argument 1: Index, Required. An integer that specifies at what position to add /remove items, Use negative values to specify the position from the end of the array.

    Argument 2: Optional. The number of items to be removed. If set to 0(zero), no items will be removed. And if not passed, all item(s) from provided index will be removed.

    Argument 3…n: Optional. The new item(s) to be added to the array.
*/ 

// here we use slice to create a new array `player` with the item at index 6
const player = players.slice(6,7)
player[0].team = 'Magic'
console.log(players)

function updatePlayerTeam(arr, id, team){
    for(let i=0; i<arr.length; i++){
        if(arr[i].id === id){
            let newPlayer = arr.slice(i, i+1)
           newPlayer[0].team = team
        }
    }
    return arr
}

// updatePlayerTeam(players, 15, 'Lakers')
// console.log(players[14])


// Task 4 

/* 
Create a function 'getPlayersByDraft' that takes in three arguments.
1. an array
2. a minimum draft year
3. a maximum draft year

This function should return the number of players drafted within those years
*/

function getPlayersByDraft(arr, minYear, maxYear){
    const draftedPlayers = []

    for(let i=0; i<arr.length; i++){
        // we use slice here to grab the first four characters from 
        // a player's years_active property and set it equal to draftYear
        // we also use Number() to change it from a string to a number

        // THE FOLLOWING TWO WILL PRODUCE THE SAME RESULTS 
        // arr[i]['years_active'] => bracket notation 
        // arr[i].years_active => dot notation

        const draftYear = Number(arr[i]['years_active'].slice(0,5))

        if(draftYear > minYear && draftYear < maxYear){
            draftedPlayers.push(arr[i])
        }
    }

    return draftedPlayers.length
}


/* Uncomment the console.log() to check your work */
console.log(getPlayersByDraft(players, 1994, 2005)) // 2
console.log(getPlayersByDraft(players, 1951, 1991)) // 7
console.log(getPlayersByDraft(players, 2008, 2012)) // 5 

// Task 5

/* 
Create a function 'addNewPlayer' that takes in
an array of players and a player object. 
This function should add the player to the end of the array

// It's always better to try and break down problems into
// smaller steps. This way you won't feel as overwhelmed 
// and you can more easily think through a problem or 
// know what to research if you are stuck

// Below is how I would break this problem 
// into steps:

1. create function called 'addNewPlayer'
2. pass in array and player object as arguments
3. add player to array that's passed in 
*/

function addNewPlayer(arr, player){
    arr.push(player)
    return arr
}

addNewPlayer(players, {
    id: 21,
    name: 'Buddy Agyin',
    team: 'Lakers',
    position: 'PG',
    status: 'active',
    years_active: '2020 - 2020'
})


// Task 6 

/* 
Uh oh, we forgot to add a player the player with id 0 
to the beginning of the players array. Use an array method 
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

players.unshift(anthony)
console.log(players)

/*
    push() => adds item to the end of an array
    pop() => removes the last item from an array
    unshift() => adds item to the beginning of an array
    shift() => removes the first item from an array
*/

// Task 7

// Here we don't need to create a for loop and if/else statement
// because we are already given the index of the player we 
// want to remove

function removePlayer(arr, index){
    arr.splice(index, 1)
    return arr
}

// Here we use an if/else statement inside of a for loop 
// because we are only given the id of the player
// The for loop is used to iterate over the entire array
// The if/else statement is used to compare the id of 
// player at index `i` with the id passed in

function removePlayerById(arr, id){
    for(let i=0; i<arr.length; i++){
        if(arr[i].id === id){
            arr.splice(i, 1)
        }
    }
    return arr
}

// removePlayer(players, 5)
removePlayerById(players, 5)
