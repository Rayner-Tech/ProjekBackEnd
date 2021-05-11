import firebase from 'firebase';


  const firebaseConfig = {
    apiKey: "AIzaSyCnsMzSBdz0vpNInq2dISpIEVrmvdrgmZ4",
    authDomain: "webproggraming.firebaseapp.com",
    databaseURL: "https://webproggraming-default-rtdb.firebaseio.com",
    projectId: "webproggraming",
    storageBucket: "webproggraming.appspot.com",
    messagingSenderId: "244504000456",
    appId: "1:244504000456:web:a399d01e66da6d3a26f2fd"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase;