import { combineReducers } from 'redux';
import { firebaseStateReducer as firebase } from 'react-redux-firebase';
import campuses from './campuses';
import signup from './signup';


export default combineReducers({
  firebase,
  campuses,
  signup,
});
