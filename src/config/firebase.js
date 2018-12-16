import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase 
var config = {
apiKey: "AIzaSyC_3-r4rQkLeX1w3zkTNZuCpyLh1eJuDu8",
authDomain: "marioplan-80f32.firebaseapp.com",
databaseURL: "https://marioplan-80f32.firebaseio.com",
projectId: "marioplan-80f32",
storageBucket: "marioplan-80f32.appspot.com",
messagingSenderId: "804930561395"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;
