import firebase from 'firebase/compat/app'


const firebaseConfig = {
  apiKey: "AIzaSyCE4DspK4BOEDrV4JNaS-l04wZhru1U0KE",
  authDomain: "robinhood-8c6ec.firebaseapp.com",
  projectId: "robinhood-8c6ec",
  storageBucket: "robinhood-8c6ec.appspot.com",
  messagingSenderId: "622034826250",
  appId: "1:622034826250:web:611a5525e52016e4a15bf3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };