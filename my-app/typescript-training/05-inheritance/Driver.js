"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var GolfCoach_1 = require("./GolfCoach");
var CricketCoach_1 = require("./CricketCoach");
//let myShape = new Shape (10, 20);
//console.log(myShape.getInfo());
var myCircle = new Circle_1.Circle(10, 20, 4);
console.log(myCircle.getInfo());
var myRectangle = new Rectangle_1.Rectangle(10, 20, 4, 5);
console.log(myRectangle.getInfo());
var myCricketCoach = new CricketCoach_1.CricketCoach();
var myGolfCoach = new GolfCoach_1.GolfCoach();
var coaches = [];
coaches.push(myCricketCoach);
coaches.push(myGolfCoach);
for (var _i = 0, coaches_1 = coaches; _i < coaches_1.length; _i++) {
    var coach = coaches_1[_i];
    console.log(coach.getDailyWorkout());
}
