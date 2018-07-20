import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyB2qDjXnK-LfnNFD8otuDS4GbTHxphOZZE",
  authDomain: "goalcoach-603ef.firebaseapp.com",
  databaseURL: "https://goalcoach-603ef.firebaseio.com",
  projectId: "goalcoach-603ef",
  storageBucket: "goalcoach-603ef.appspot.com",
  messagingSenderId: "107462982204"
};

export const firebaseApp = firebase.initializeApp(config)