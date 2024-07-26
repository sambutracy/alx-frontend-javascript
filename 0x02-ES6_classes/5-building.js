// 5-building.js

class Building {
  constructor(sqft) {
    this._sqft = this._validateSqft(sqft);
    if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // Validate sqft
  _validateSqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    return sqft;
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }
}

export default Building;
