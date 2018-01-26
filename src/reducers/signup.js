// Action types
const TAB_SELECT = 'admission.laboratoria.la/signup/TAB_SELECT';


// Action Creators
export const selectCohortUsersTab = id => ({
  type: TAB_SELECT,
  payload: id,
});


// Reducer
export default (state = {
  currentTab: 0,
}, action) => {
  if (action.type === TAB_SELECT) {
    return { ...state, currentTab: action.payload };
  }
  return state;
};
