var found = false;
var grade = 10.11323;
var firstName = "First Name";
var lastName = "Last Name";
console.log("Found: " + found);
console.log("Grade: " + grade);
console.log("First Name: " + firstName);
console.log("Last Name: " + lastName);
//template string
console.log("Hi ".concat(firstName, " ").concat(lastName));
var reviews = [5, 4, 3, 2, 1, 4];
var total = 0;
for (var n in reviews) {
    total += reviews[n];
    console.log(reviews[n]);
}
var average = total / reviews.length;
console.log("Average: " + average);
var cars = ["Scort", "Unio"];
cars.push("car 1");
cars.push("car 2");
for (var car in cars) {
    console.log(cars[car]);
}
var sports = ["Golf", "Cricket", "Soccer"];
sports.push("Basketball");
sports.push("Ski");
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var sport = sports_1[_i];
    console.log(sport);
}
