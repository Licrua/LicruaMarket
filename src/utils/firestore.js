// firestore.js
import { setDoc, doc } from 'firebase/firestore';
import { db } from './auth';

const storeUserData = async (userId, name) => {
  try {
    await setDoc(doc(db, 'users', userId), {
      name: name,
      registrationDate: new Date(),
    });
    console.log('User data stored successfully');
  } catch (error) {
    console.error('Error storing user data:', error.message);
  }
};

export default storeUserData;
