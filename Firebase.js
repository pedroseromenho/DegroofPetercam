import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyB5N7TC7ewJKmo0q-OO2un09a90OtM4H9Y',
  authDomain: 'reactapp-89458.firebaseapp.com',
  databaseURL: 'https://reactapp-89458.firebaseio.com',
  projectId: 'reactapp-89458',
  storageBucket: 'reactapp-89458.appspot.com',
  messagingSenderId: '1098042062204',
};
export default (!firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app());
