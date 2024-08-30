import { getAuth } from 'firebase/auth';
import { firebaseApp } from './init';

export const firebaseAuth = getAuth(firebaseApp);
