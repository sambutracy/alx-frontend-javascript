// 8-hbtn_class.js
class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  toString() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }
}

export default HolbertonClass;
