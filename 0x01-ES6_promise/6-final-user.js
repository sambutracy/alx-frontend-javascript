// 6-final-user.js

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function handleProfileSignup(firstName, lastName, fileName) {
  // Call the functions and get their promises
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);

  // Use Promise.allSettled to handle both promises
  return Promise.allSettled([signUpPromise, uploadPromise])
    .then(results => {
      // Format the results into the required structure
      return results.map(result => ({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : result.reason
      }));
    });
}

export default handleProfileSignup;
