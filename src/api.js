import { getFirebase } from 'react-redux-firebase';


const baseUrl = `https://${process.env.REACT_APP_FIREBASE_PROJECT}.firebaseapp.com`;


const sendRequest = (store, action, token) => {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
    if (xhr.status === 200) {
      store.dispatch({ type: action.payload.next[1], payload: xhr.response });
    } else {
      store.dispatch({
        type: action.payload.next[2],
        payload: xhr.response,
      });
    }
  });

  xhr.addEventListener('error', (err) => {
    store.dispatch({ type: action.payload.next[2], payload: err });
  });

  // xhr.addEventListener('abort', () => console.log('abort'));

  xhr.open(action.payload.method || 'GET', baseUrl + action.payload.path);
  xhr.responseType = 'json';

  if (token) {
    xhr.setRequestHeader('Authorization', `Bearer ${token}`);
  }

  if (action.payload.body) {
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(action.payload.body));
  } else {
    xhr.send();
  }

  store.dispatch({ type: action.payload.next[0] });
};


const apiMiddleware = store => next => (action) => {
  if (!/^api\.laboratoria\.la/.test(action.type)) {
    return next(action);
  }

  const currentUser = getFirebase().auth().currentUser;

  if (!currentUser || !currentUser.getToken) {
    return sendRequest(store, action);
  }

  return currentUser.getToken(true).then((token) => {
    return sendRequest(store, action, token);
  });
};


export default apiMiddleware;
