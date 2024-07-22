export default function taskBlock(trueOrFalse) {
    let task = false;  // Use let for block scope
    let task2 = true;  // Use let for block scope
  
    if (trueOrFalse) {
      let task = false;  // New block-scoped variable
      let task2 = true;  // New block-scoped variable
    }
  
    return [task, task2];
  }  