import { combineReducers } from 'redux';
import { firebaseStateReducer as firebase } from 'react-redux-firebase';
// import signin from './signin';


export default combineReducers({
  firebase,
  // signin,
});
