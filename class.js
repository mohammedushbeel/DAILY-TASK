class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  start() {
    console.log(`${this.brand} ${this.model} started 🚗`);
  }
}

let car1 = new Car("Toyota", "Corolla");
car1.start(); 
