// 100-await.js

import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    // Wait for both promises to resolve
    const photo = await uploadPhoto();
    const user = await createUser();

    // Return an object with the resolved values
    return { photo, user };
  } catch (error) {
    // Return an object with null values if any promise fails
    return { photo: null, user: null };
  }
}
