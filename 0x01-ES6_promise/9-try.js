// 9-try.js

export default function guardrail(mathFunction) {
  const queue = [];

  try {
    // Execute the mathFunction and append the result to the queue
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    // Append the error message to the queue if an error is thrown
    queue.push(`Error: ${error.message}`);
  } finally {
    // Append the final message to the queue
    queue.push('Guardrail was processed');
  }

  return queue;
}
