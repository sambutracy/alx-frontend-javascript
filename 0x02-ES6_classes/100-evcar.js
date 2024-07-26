import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  set range(value) {
    this._range = value;
  }

  // Override cloneCar to return an instance of Car
  cloneCar() {
    const Species = Car[Symbol.species];
    return new Species(this._brand, this._motor, this._color);
  }
}
