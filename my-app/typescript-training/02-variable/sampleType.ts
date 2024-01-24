let found : boolean = false;
let grade : number = 10.11323;
let firstName : string = "First Name";
let lastName : string = "Last Name";

console.log("Found: " + found);
console.log("Grade: " + grade);
console.log("First Name: " + firstName);
console.log("Last Name: " + lastName);

//template string
console.log(`Hi ${firstName} ${lastName}`);

let reviews: number[] = [5, 4, 3, 2, 1, 4];
let total: number = 0;
for (let n in reviews){
    total += reviews[n];
    console.log(reviews[n]);
}

let average: number = total / reviews.length;
console.log("Average: " + average);

let cars:string[] = ["Scort","Unio"];

cars.push("car 1");
cars.push("car 2");

for (let car in cars){
    console.log(cars[car]);
}


let sports:string[] = ["Golf","Cricket", "Soccer"];

sports.push("Basketball");
sports.push("Ski");

for (let sport of sports){
    console.log(sport);
}


