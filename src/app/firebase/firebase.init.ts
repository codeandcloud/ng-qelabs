import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { environment } from '../../environments/environment';

// Initialize Firebase
const app = initializeApp(environment.firebaseConfig);

// Initialize Firebase Storage
export const storage = getStorage(app);
