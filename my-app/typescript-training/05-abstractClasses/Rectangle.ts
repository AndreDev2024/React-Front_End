import { Shape } from './Shape';

export class Rectangle extends Shape {
    constructor(theX: number, theY: number, private _width: number, private _height:number){
        super(theX, theY);
    }

    public get width(): number {
        return this._width;
    }

    public set width(value: number){
        this._width
    }

    public get height(): number {
        return this._height;
    }

    public set height(value: number){
        this.height = value;
    }

    getInfo():string{
        return super.getInfo() + ", height: " + this.height + ", width: " + this.width;
    }
}