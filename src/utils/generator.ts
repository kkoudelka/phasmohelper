import firebase from 'firebase/app';
import 'firebase/firestore';

export const getSessionId = async (): Promise<string> => {
  let id = '';

  while (id === '') {
    id = getString(5);

    const res = await firebase
      .firestore()
      .collection('sessions')
      .where('sessionID', '==', id)
      .limit(1)
      .get();
    if (res.docs[0]?.exists ?? false) {
      id = '';
      continue;
    }
  }

  return id;
};

const getString = (length: number): string => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
