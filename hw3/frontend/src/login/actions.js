import {
 LOGIN_REQUESTING
} from "./constants";


const loginRequest = ({username, password})=> ({
  type: LOGIN_REQUESTING,
  username,
  password,
});

export default loginRequest;