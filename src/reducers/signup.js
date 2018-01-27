// Action types
const UPDATE_PRE_SIGNUP_FIELD = 'admission.laboratoria.la/signup/UPDATE_PRE_SIGNUP_FIELD';


// Action Creators
export const updatePreSignupField = (field, value) => ({
  type: UPDATE_PRE_SIGNUP_FIELD,
  payload: { field, value },
});


// Reducer
export default (state = {
  preSignup: {
    campus: '',
    previousApplication: '',
    trainingStages: '',
    format: '',
    tracks: '',
    programmingLanguage: '',
  },
}, action) => {
  if (action.type === UPDATE_PRE_SIGNUP_FIELD) {
    return {
      ...state,
      preSignup: {
        ...state.preSignup,
        [action.payload.field]: action.payload.value,
      },
    };
  }
  return state;
};
