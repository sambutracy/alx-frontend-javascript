// 3-currency.js

class Currency {
    constructor(code, name) {
      this._code = code;
      this._name = name;
    }
  
    // Getter for code
    get code() {
      return this._code;
    }
  
    // Setter for code
    set code(value) {
      if (typeof value === 'string') {
        this._code = value;
      } else {
        throw new TypeError('Code must be a string');
      }
    }
  
    // Getter for name
    get name() {
      return this._name;
    }
  
    // Setter for name
    set name(value) {
      if (typeof value === 'string') {
        this._name = value;
      } else {
        throw new TypeError('Name must be a string');
      }
    }
  
    // Method to display the full currency
    displayFullCurrency() {
      return `${this._name} (${this._code})`;
    }
  }
  
  export default Currency;
  