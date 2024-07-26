// 3-all.js

import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  // Use Promise.all to handle both promises
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      // Log the body from uploadPhoto and firstName, lastName from createUser
      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch(() => {
      // Log message in case of an error
      console.log('Signup system offline');
    });
}

export default handleProfileSignup;
