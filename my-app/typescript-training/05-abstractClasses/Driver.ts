import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';

let myShape = new Shape (10, 20);
console.log(myShape.getInfo());

let myCircle = new Circle (10, 20, 4);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle (10, 20, 4,5);
console.log(myRectangle.getInfo());