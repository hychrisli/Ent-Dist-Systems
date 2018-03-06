import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import Messages from '../notifications/messages'
import Errors from '../notifications/errors'
import Logout from '../logout'

import {profileUpdate, profileGet} from "./actions";

class Profile extends Component{

  static propTypes = {
    handleSubmit: PropTypes.func,
    profileUpdate: PropTypes.func,
    profileGet: PropTypes.func,
    profile: PropTypes.shape({
      updating: PropTypes.bool,
      successful: PropTypes.bool,
      messages: PropTypes.array,
      errors: PropTypes.array,}),
    account: PropTypes.shape({
      email: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string
    })
  };

  submit = (values) => {
    this.props.profileUpdate(values)
  };

  componentDidMount() {
    let username = 'abc';
    this.props.profileGet(username);
  }

  render() {
    const {
      handleSubmit,
      profile: {
        updating,
        successful,
        messages,
        errors,
      },
      account: {
        email,
        firstName,
        lastName
      }
    } = this.props;

    return (
      <div className={"profile"}>
        <form className="widget-form" onSubmit={handleSubmit(this.submit)}>
          <h1>Profile</h1>

          <p>{this.props.account.email}</p>
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
          <label htmlFor={"FirstName"}>First Name</label>
          <Field
            name={"firstName"}
            type={"text"}
            id={"firstName"}
            className={"firstName"}
            label={"FirstName"}
            component={"input"}/>
          <label htmlFor={"LastName"}>Last Name</label>
          <Field
            name={"lastName"}
            type={"text"}
            id={"lastName"}
            className={"lastName"}
            label={"LastName"}
            component={"input"}/>
          <label htmlFor={"AboutMe"}>About Me</label>
          <Field
            name={"aboutMe"}
            type={"text"}
            id={"aboutMe"}
            className={"aboutMe"}
            label={"AboutMe"}
            component={"input"}/>
          <button type="submit">Update</button>
        </form>
        <div className={"auth-messages"}>
          {!updating && !!errors && (
            <Errors message={"Failed to update profile due to: "} errors={errors}/>
          )}
          {!updating && !!messages.length && ( <Messages messages={messages} />)}
          {!updating && successful && (<div>Profile update successful </div>)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state =>({
  profile: state.profile,
  account: state.account,
});

const connected = connect(mapStateToProps, {profileUpdate, profileGet})(Profile);


const formed = reduxForm({
  form: 'profile',
})(connected);

export default formed;

