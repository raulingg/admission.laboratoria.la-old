import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import Button from 'material-ui/Button';
import Section from './Section';


const signInWithFacebook = ({ firebase }) => (e) => {
  e.preventDefault();

  const provider = new firebase.auth.FacebookAuthProvider();
  // provider.addScope('user_birthday');
  provider.addScope('public_profile');
  // user_hometown
  // user_location

  // firebase.auth().languageCode = 'es_PE';
  firebase.auth().useDeviceLanguage();
  // console.log(firebase.auth().languageCode);

  provider.setCustomParameters({
    'display': 'popup',
  });

  firebase.auth().signInWithPopup(provider).then((result) => {
    // console.log(result);
    // // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    // const token = result.credential.accessToken;
    // // The signed-in user info.
    // const user = result.user;
    // // ...
  }).catch((error) => {
    // console.log(error);
    // // Handle Errors here.
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // // The email of the user's account used.
    // const email = error.email;
    // // The firebase.auth.AuthCredential type that was used.
    // const credential = error.credential;
    // ...
  });
};


const isFacebookAuth = (auth) => {
  return auth
    && auth.providerData
    && auth.providerData.reduce
    && auth.providerData.reduce(
      (memo, data) => memo || data.providerId === 'facebook.com',
      false
    );
};


const Form = ({
  auth,
  authError,
  profile,
  campuses,
  firebase,
}) => {
  if (!auth.isLoaded || !profile.isLoaded) {
    return null;
  }

  return (
    <Section id="form">
      <h2>Formulario de postulación</h2>
      <p>
        Para postular es necesario correo electrónico. Deberás usar la misma
        dirección durante todo el proceso.
      </p>
      {authError && authError.code && (
        <p>Error: {authError.code}</p>
      )}
      {isFacebookAuth(auth) && (
        <p>Ya estás autenticado con facebook. estás registrado en algún cohort?</p>
      )}
      {!auth.isEmpty && (
        <Button onClick={() => firebase.logout()}>Cerrar sesión</Button>
      )}
      {auth.isEmpty && (
        <Button onClick={signInWithFacebook({ firebase })}>Inicia sesión con Facebook</Button>
      )}
    </Section>
  );
};


export default compose(
  firebaseConnect(['campuses']),
  connect(
    ({ firebase: { auth, authError, profile, data } }) => ({
      auth,
      authError,
      profile,
      campuses: data.campuses,
    }),
  ),
)(Form);
