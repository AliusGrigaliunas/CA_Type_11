class Car {
  // savybės - properties
  public brand: string;
  public model: string;
  public year: number;
  public color?: string;

  public constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  // metodais - methods
  public printInfo() {
    console.log(this);
  }
}

const car = new Car('Opel', 'Astra', 1999);
car.color = 'red';

console.log(car.brand);
console.log(car.model);
console.log(car.year);

car.printInfo();



