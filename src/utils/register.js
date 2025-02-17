import registerUser from './auth';
import storeUserData from './firestore';

const handleRegister = async (email, password, name) => {
  try {
    const user = await registerUser(email, password);
    if (user) {
      await storeUserData(user.uid, name);  // Сохраняем дополнительные данные
    }
  } catch (error) {
    console.error('Error during registration:', error.message);
  }
};

export default handleRegister;