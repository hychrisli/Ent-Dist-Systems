import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form'
import {connect} from 'react-redux'

import {signupRequest} from './actions'

class Signup extends Component{
  render(){
    return (
      <div className={"signup"}>
        <form className="widget-form">
          <h1>Signup</h1>
          <label htmlFor={"email"}>Email</label>
          <Field
            name={"email"}
            type={"text"}
            id={"email"}
            className={"email"}
            label={"Email"}
            component={"input"}/>
          <label htmlFor={"password"}>Password</label>
          <Field
            name={"password"}
            type={"password"}
            id={"password"}
            className={"password"}
            label={"Password"}
            component={"input"}
          />
          <button type="submit">SIGNUP</button>
        </form>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  signup: state.signup,
});


const connected = connect(mapStateToProps, {signupRequest})(Signup);

const formed = reduxForm({
  form: 'signup',
})(connected);

export default formed;