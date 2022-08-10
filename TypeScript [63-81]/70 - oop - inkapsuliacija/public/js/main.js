"use strict";
class Car {
    brand;
    model;
    year;
    color;
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    printInfo() {
        console.log(this);
    }
}
const car = new Car('Opel', 'Astra', 1999);
car.color = 'red';
console.log(car.brand);
console.log(car.model);
console.log(car.year);
car.printInfo();
//# sourceMappingURL=main.js.map