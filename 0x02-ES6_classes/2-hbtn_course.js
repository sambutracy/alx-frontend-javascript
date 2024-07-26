// 2-hbtn_course.js

class HolbertonCourse {
  constructor(name, length, students) {
    // Validate types and assign attributes
    this._name = this._validateName(name);
    this._length = this._validateLength(length);
    this._students = this._validateStudents(students);
  }

  // Validate name
  _validateName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    return name;
  }

  // Validate length
  _validateLength(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    return length;
  }

  // Validate students
  _validateStudents(students) {
    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    return students;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(value) {
    this._name = this._validateName(value);
  }

  // Getter for length
  get length() {
    return this._length;
  }

  // Setter for length
  set length(value) {
    this._length = this._validateLength(value);
  }

  // Getter for students
  get students() {
    return this._students;
  }

  // Setter for students
  set students(value) {
    this._students = this._validateStudents(value);
  }
}

export default HolbertonCourse;
