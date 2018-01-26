import { createStore, applyMiddleware, compose } from 'redux';
import { reactReduxFirebase } from 'react-redux-firebase';
import firebase from 'firebase'
import reducers from './reducers';
// import apiMiddleware from './middleware';


firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: `${process.env.REACT_APP_FIREBASE_PROJECT}.firebaseapp.com`,
  databaseURL: `https://${process.env.REACT_APP_FIREBASE_PROJECT}.firebaseio.com`,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT,
  storageBucket: `${process.env.REACT_APP_FIREBASE_PROJECT}.appspot.com`,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
});


const middlewares = [/*apiMiddleware*/];


const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, {
    userProfile: 'users',
    perserveOnLogout: ['campuses'],
    preserveOnEmptyAuthChange: ['campuses'],
  }),
)(createStore);


export default createStoreWithFirebase(reducers, applyMiddleware(...middlewares));
