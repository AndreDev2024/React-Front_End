import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';
import { Coach } from './Coach';
import {GolfCoach} from './GolfCoach';
import { CricketCoach } from './CricketCoach';

//let myShape = new Shape (10, 20);
//console.log(myShape.getInfo());

let myCircle = new Circle (10, 20, 4);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle (10, 20, 4,5);
console.log(myRectangle.getInfo());

let myCricketCoach = new CricketCoach ();
let myGolfCoach = new GolfCoach ();

let coaches:Coach[] = [];

coaches.push(myCricketCoach);
coaches.push(myGolfCoach);

for (let coach of coaches) {
    console.log(coach.getDailyWorkout());
}
