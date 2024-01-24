export class Customer{
    //properties
    private _firstName: string;
    private _lastName: string;

    constructor(theFirst: string, theLast: string){
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    
    //public getFirstName(): string { return this.firstName; }
    //public getLastName(): string { return this.lastName; }

    get firstName(): string { return this._firstName; }
    set firstName(value: string) { this._firstName = value; }

    get lastName(): string { return this._lastName; }
    set lastName(value: string) { this._lastName = value; }
}

let CustomerTest: Customer = new Customer("testFirstName", "testLastName");
