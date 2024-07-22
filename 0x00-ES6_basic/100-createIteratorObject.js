export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const employees = Object.values(allEmployees).flat(); // Flatten the array of arrays

  return employees[Symbol.iterator](); // Return an iterator for the flattened array
}
