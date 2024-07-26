// 2-then.js

function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      // Log the message when the promise resolves
      console.log('Got a response from the API');
      // Return the object when resolved
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch(() => new Error()); // Single-line return for the catch block
}

export default handleResponseFromAPI;
