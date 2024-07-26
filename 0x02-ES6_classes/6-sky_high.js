// 6-sky_high.js
import Building from './5-building.js';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = this._validateFloors(floors);
  }

  // Validate floors
  _validateFloors(floors) {
    if (typeof floors !== 'number') {
      throw new TypeError('floors must be a number');
    }
    return floors;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Override the evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}

export default SkyHighBuilding;
