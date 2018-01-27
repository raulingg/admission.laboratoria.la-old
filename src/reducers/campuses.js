// Action types
const FETCH_CAMPUSES_PENDING = 'admission.laboratoria.la/signup/FETCH_CAMPUSES_PENDING';
const FETCH_CAMPUSES_SUCCESS = 'admission.laboratoria.la/signup/FETCH_CAMPUSES_SUCCESS';
const FETCH_CAMPUSES_FAILURE = 'admission.laboratoria.la/signup/FETCH_CAMPUSES_FAILURE';


// Action Creators
export const fetchCampuses = () => ({
  type: 'api.laboratoria.la',
  payload: {
    method: 'GET',
    path: '/campuses',
    next: [FETCH_CAMPUSES_PENDING, FETCH_CAMPUSES_SUCCESS, FETCH_CAMPUSES_FAILURE],
  },
});


// Reducer
export default (state = {
  data: undefined,
  error: undefined,
  loading: false,
  isLoaded: false,
}, action) => {
  switch (action.type) {
    case FETCH_CAMPUSES_PENDING:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case FETCH_CAMPUSES_SUCCESS:
      const sorted = Object.keys(action.payload || {}).reduce((memo, key) => {
        return [
          ...memo,
          {
            id: key,
            ...action.payload[key],
          },
        ];
      }, []);
      return {
        ...state,
        data: action.payload,
        sorted,
        active: sorted.filter(campus => campus.active),
        loading: false,
        isLoaded: true,
        error: null,
      };
    case FETCH_CAMPUSES_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoaded: false,
        loading: false,
      };
    default:
      return state;
  }
};
