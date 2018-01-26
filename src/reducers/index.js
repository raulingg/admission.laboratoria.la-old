import { combineReducers } from 'redux';
import { firebaseStateReducer as firebase } from 'react-redux-firebase';
import signup from './signup';


export default combineReducers({
  firebase,
  signup,
});
