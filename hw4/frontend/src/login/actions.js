import {
 LOGIN_REQUESTING
} from "./constants";


export const loginRequest = ({username, password})=> ({
  type: LOGIN_REQUESTING,
  username,
  password,
});

export default loginRequest;