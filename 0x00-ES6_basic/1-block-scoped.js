export default function taskBlock(trueOrFalse) {
  const task = false; // Use const for variables that won't be reassigned
  const task2 = true; // Use const for variables that won't be reassigned

  if (trueOrFalse) {
    const task = true; // Block-scoped variable
    const task2 = false; // Block-scoped variable
  }

  return [task, task2];
}
 