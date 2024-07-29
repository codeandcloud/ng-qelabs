import { FirebaseOptions, initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { environment } from '../../environments/environment';

const firebaseConfig = environment.firebaseConfig as FirebaseOptions;

const app = initializeApp(firebaseConfig);
export const db = getStorage(app);
