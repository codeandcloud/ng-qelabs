import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { environment } from '../../environments/environment';

const app = initializeApp(environment.firebaseConfig);
export const storage = getStorage(app);
