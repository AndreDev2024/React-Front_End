import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';

let myShape = new Shape (10, 20);
let myCircle = new Circle (10, 20, 4);
let myRectangle = new Rectangle (10, 20, 4,5);

let theShapes: Shape[]=[];

theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

for (let shape of theShapes){
    console.log(shape.getInfo());
}