import {USER_DATA, LOADING} from '../actionTypes';
const initialState = {
  user: {
    name: '',
    email: '',
    avatar:
      'https://gravatar.com/avatar/4bd8a7954f4978b3d04c39af4e5bd4d2?s=400&d=robohash&r=x',
  },
  loading: false,
};
function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_DATA:
      return {...state, user: action.payload};
    case LOADING:
      return {...state, loading: action.payload};
    default:
      return state;
  }
}
export default userReducer;
