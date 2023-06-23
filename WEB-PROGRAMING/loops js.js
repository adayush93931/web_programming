console.log("Loops in JS"); for (let i = 0; i < 3; i++) { 
    console.log(i); 
} 
console.log("\n"); 
let friends = ["Rohan", "Sanjeev", "Deepti", "Pooja", "Raghav"]; for (let index = 0; index < friends.length; index++) {     console.log("Hello friend, " + friends[index]); 
} 
console.log("\n"); 
friends.forEach(function f(element) { 
    console.log("Hello Friend, " + element + " to modern JavaScript"); 
}); 
console.log("\n"); 
for (element of friends) { 
    console.log("Hello Friend, " + element + " to modern JavaScript again"); 
} 
console.log("\n"); 
let employee = { 
    name: "Raghav", 
    id: 1, 
    branch: "AI" 
} 
// Use this loop to iterate over objects in JavaScript for (key in employee) { 
    console.log(`The ${key} of employee is ${employee[key]}`); 
} 
console.log("\n"); 
// while loop in js let i = 0; while (i < 4) { 
    console.log(`${i} is less than 4`);     i++; 
} 
console.log("\n"); 
// do while loop in js let j = 5; do { 
    console.log(`${j} is less than 4 and we are inside do while loop`);     j++; } while (j < 4); 
