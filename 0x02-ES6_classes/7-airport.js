// 7-airport.js
class Airport {
    constructor(name, code) {
      this._name = this._validateName(name);
      this._code = this._validateCode(code);
    }
  
    // Validate name
    _validateName(name) {
      if (typeof name !== 'string') {
        throw new TypeError('Name must be a string');
      }
      return name;
    }
  
    // Validate code
    _validateCode(code) {
      if (typeof code !== 'string') {
        throw new TypeError('Code must be a string');
      }
      return code;
    }
  
    // Getter for name
    get name() {
      return this._name;
    }
  
    // Getter for code
    get code() {
      return this._code;
    }
  
    // Override toString method
    toString() {
      return `[object ${this._code}]`;
    }
  }
  
  export default Airport;
  