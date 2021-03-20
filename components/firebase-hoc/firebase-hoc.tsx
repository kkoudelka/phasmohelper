import React, { useEffect } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';

const FirebaseHoc: React.FC = ({ children }) => {
  useEffect(() => {
    if (!firebase.apps.length) {
      
      console.log('Firebase app initialised');
    }
  }, []);
  return <>{children}</>;
};

export default FirebaseHoc;
