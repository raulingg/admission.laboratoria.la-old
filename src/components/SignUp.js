import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import { withStyles } from 'material-ui/styles';
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Select from 'material-ui/Select';
import Button from 'material-ui/Button';
import Section from './Section';
import { updatePreSignupField } from '../reducers/signup';


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


const styles = theme => ({
  root: {
    maxWidth: 484,
    margin: '0 auto',
  },
  form: {
    textAlign: 'left',
  },
  formControl: {
    width: '100%',
    marginBottom: theme.spacing.unit * 3,
  },
});


const SignUp = ({
  auth,
  authError,
  profile,
  campuses,
  signup,
  updatePreSignupField,
  firebase,
  classes,
}) => {
  if (!auth.isLoaded || !profile.isLoaded) {
    return null;
  }

  return (
    <Section id="signup">
      <div className={classes.root}>
        <h2>Formulario de postulación</h2>
        <p>
          Para postular es necesario correo electrónico. Deberás usar la misma
          dirección durante todo el proceso.
        </p>

        <div className={classes.form}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="campus">¿A qué sede deseas postular?</InputLabel>
            <Select
              value={signup.preSignup.campus}
              onChange={(e) => updatePreSignupField('campus', e.target.value)}
              inputProps={{
                name: 'campus',
                id: 'campus',
              }}
            >
              {campuses && campuses.active && campuses.active.map(campus => (
                <MenuItem key={campus.id} value={campus.id}>{campus.name}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl component="fieldset" required className={classes.formControl}>
            <FormLabel component="legend">
              ¿Has postulado anteriormente a Laboratoria? (esta información no
              afecta en nada a tu proceso de selección)
            </FormLabel>
            <RadioGroup
              aria-label="previous-application"
              name="previous-application"
              value={signup.preSignup.previousApplication}
              onChange={(e) => updatePreSignupField('previousApplication', e.target.value)}
            >
              <FormControlLabel value="true" control={<Radio />} label="Sí" />
              <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset" required className={classes.formControl}>
            <FormLabel component="legend">
              ¿Cuántas etapas tiene el programa de Laboratoria?
            </FormLabel>
            <RadioGroup
              aria-label="training-stages"
              name="training-stages"
              value={signup.preSignup.trainingStages}
              onChange={(e) => updatePreSignupField('trainingStages', e.target.value)}
            >
              <FormControlLabel
                value="0"
                control={<Radio />}
                label="Una única etapa llamada bootcamp"
              />
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="Dos etapas obligatorias llamadas bootcamp y educación continua"
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label="Dos etapas optativas llamadas bootcamp y educación continua"
              />
              <FormControlLabel
                value="3"
                control={<Radio />}
                label="Una etapa obligatoria llamada bootcamp y una optativa llamada educación continua"
              />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset" required className={classes.formControl}>
            <FormLabel component="legend">
              ¿Cómo es la modalidad de cursado de Laboratoria?
            </FormLabel>
            <RadioGroup
              aria-label="format"
              name="format"
              value={signup.preSignup.format}
              onChange={(e) => updatePreSignupField('format', e.target.value)}
            >
              <FormControlLabel value="online" control={<Radio />} label="Online" />
              <FormControlLabel value="onsite" control={<Radio />} label="Presencial de lunes a viernes" />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset" required className={classes.formControl}>
            <FormLabel component="legend">
              ¿Cuáles son los perfiles de nuestras egresadas?
            </FormLabel>
            <RadioGroup
              aria-label="tracks"
              name="tracks"
              value={signup.preSignup.tracks}
              onChange={(e) => updatePreSignupField('tracks', e.target.value)}
            >
              <FormControlLabel value="ux" control={<Radio />} label="UX Designer" />
              <FormControlLabel value="ux-fe-proto" control={<Radio />} label="UX Designers, Frontend Developers y Prototypers" />
              <FormControlLabel value="fe-be" control={<Radio />} label="FrontEnd Developer y Backend Developer" />
              <FormControlLabel value="proto-be-ux" control={<Radio />} label="Prototypers, Backend Developers y UX Designers" />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset" required className={classes.formControl}>
            <FormLabel component="legend">
              Escoge uno de los lenguajes que aprenderás durante el bootcamp
            </FormLabel>
            <RadioGroup
              aria-label="programming-language"
              name="programming-language"
              value={signup.preSignup.programmingLanguage}
              onChange={(e) => updatePreSignupField('programmingLanguage', e.target.value)}
            >
              <FormControlLabel value="php" control={<Radio />} label="PHP" />
              <FormControlLabel value="js" control={<Radio />} label="JavaScript" />
              <FormControlLabel value="c++" control={<Radio />} label="C++" />
              <FormControlLabel value="py" control={<Radio />} label="Python" />
            </RadioGroup>
          </FormControl>
        </div>

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
          <Button
            raised
            color="primary"
            onClick={signInWithFacebook({ firebase })}
          >
            Inicia sesión con Facebook
          </Button>
        )}
      </div>
    </Section>
  );
};


export default compose(
  firebaseConnect([]),
  connect(
    ({ campuses, signup, firebase: { auth, authError, profile } }) => ({
      auth,
      authError,
      profile,
      campuses,
      signup,
    }),
    { updatePreSignupField }
  ),
  withStyles(styles),
)(SignUp);
