import {
  PROFILE_GETTING,
  PROFILE_GET_SUCCESS,
  PROFILE_GET_ERROR
} from './constants'

const reducer = (state={}, action) => {
  switch(action.type){
    case PROFILE_GETTING:
      return {
        messages: [{body: 'Getting profile...', time: new Date()}],
      };

    case PROFILE_GET_SUCCESS:
      return {

        email: action.response[0].email,
        firstName: action.response[0].firstName,
        lastName: action.response[0].lastName

      };
    default:
      return state
  }
};
export default reducer;