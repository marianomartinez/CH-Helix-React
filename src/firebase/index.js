import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
  // apiKey: "AIzaSyB87sjiU5Fa27EdRbBFUsha6RgOasNoK8A",
  // authDomain: "ch-helix-react.firebaseapp.com",
  // databaseURL: "https://ch-helix-react.firebaseio.com",
  // projectId: "ch-helix-react",
  // storageBucket: "ch-helix-react.appspot.com",
  // messagingSenderId: "44284790541",
  // appId: "1:44284790541:web:f6cb192609e4ba85cc5244",

  apiKey: process.env.REACT_APP_FS_API_KEY,
  authDomain: process.env.REACT_APP_FS_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FS_DATABASE_URL,
  projectId: process.env.REACT_APP_FS_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FS_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FS_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FS_APP_ID,
});

export function getFirebase() {
  return app;
}
export function getFirestore() {
  return firebase.firestore(app);
}

// Export other firebase integrations