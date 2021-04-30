import firebase from 'firebase';
import firestore from 'firebase/firestore';
import auth from 'firebase/auth';

const config = {
  	apiKey: "AIzaSyBSH0_Cuw8VTykM1tY0_lFrNbtPcQ388zI",
    authDomain: "laundry-84667.firebaseapp.com",
    databaseURL: "https://laundry-84667.firebaseio.com",
    projectId: "laundry-84667",
    storageBucket: "laundry-84667.appspot.com",
    messagingSenderId: "743103051529",
    appId: "1:743103051529:web:3866df884512eef5e585d8"
};
firebase.initializeApp(config);


export default firebase;

    /*apiKey: "AIzaSyC8mzrecPk01f37jutYVdQ88dfUhcmr1NE",
    authDomain: "jihanfood-3eec0.firebaseapp.com",
    databaseURL: "https://jihanfood-3eec0.firebaseio.com",
    projectId: "jihanfood-3eec0",
    storageBucket: "jihanfood-3eec0.appspot.com",
    messagingSenderId: "410931818840",
    appId: "1:410931818840:web:8934994a0858a8eeb8352d",
    measurementId: "G-PP0ZRWN9G6"*/