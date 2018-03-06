import {
  PROFILE_UPDATING,
  PROFILE_UPDATE_SUCCESS,
  PROFILE_UPDATE_ERROR,

  PROFILE_GETTING,
  PROFILE_GET_SUCCESS,
  PROFILE_GET_ERROR

} from './constants'

const initialUpdState = {
  updating: false,
  successful: false,
  messages: [],
  errors: []
};

export const pUpdReducer = (state=initialUpdState, action) => {

  switch(action.type){
    case PROFILE_UPDATING:
      return {
        updating: true,
        successful: false,
        messages: [{body: 'Updating profile...', time: new Date()}],
        errors: []
      };

    case PROFILE_UPDATE_SUCCESS:
      return {
        updating: false,
        successful: true,
        messages: [{body: 'Profile update successful', time: new Date()}],
        errors: []
      };

    case PROFILE_UPDATE_ERROR:
      return {
        errors: state.errors.concat([{
          body: action.error.toString(),
          time: new Date()
        }]),
        messages: [],
        updating: false,
        successful: false
      };

    default:
      return state
  }
};

export const pGetReducer = (state=initialState, action) => {

  switch(action.type){
    case PROFILE_GETTING:
      return {
        updating: true,
        successful: false,
        messages: [{body: 'Getting profile...', time: new Date()}],
        errors: []
      };

    case PROFILE_GET_SUCCESS:
      return {
        updating: false,
        successful: true,
        messages: [{body: 'Profile get successful', time: new Date()}],
        errors: []
      };

    case PROFILE_GET_ERROR:
      return {
        errors: state.errors.concat([{
          body: action.error.toString(),
          time: new Date()
        }]),
        messages: [],
        updating: false,
        successful: false
      };

    default:
      return state
  }
};