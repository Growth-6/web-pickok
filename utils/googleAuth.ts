import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { firebaseAuth } from '@/firebase/auth';

export default async function googleAuth() {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(firebaseAuth, provider);

  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential?.accessToken;
  //   const { accessToken, refreshToken, displayName } = result.user;

  return { token };
}
