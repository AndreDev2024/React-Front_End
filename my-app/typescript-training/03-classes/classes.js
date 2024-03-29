var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        //public getFirstName(): string { return this.firstName; }
        //public getLastName(): string { return this.lastName; }
        get: function () { return this._firstName; },
        set: function (value) { this._firstName = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () { return this._lastName; },
        set: function (value) { this._lastName = value; },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var myCustomer = new Customer("TestFirstName", "TestLastName");
console.log(myCustomer);
