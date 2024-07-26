export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name; // Using setter for validation
    this.length = length; // Using setter for validation
    this.students = students; // Using setter for validation
  }

  // Getter and setter for name
  get name() {
    return this.name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this.name = value;
  }

  // Getter and setter for length
  get length() {
    return this.length;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this.length = value;
  }

  // Getter and setter for students
  get students() {
    return this.students;
  }

  set students(value) {
    if (!Array.isArray(value) || !value.every((item) => typeof item === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this.students = value;
  }
}
