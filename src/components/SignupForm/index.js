import { Component } from "react";
import { withRouter } from "react-router-dom";
import UserProfileDetailsContext from "../../context/UserProfileDetailsContext";
import "./index.css";

class SignupForm extends Component {
  static contextType = UserProfileDetailsContext;

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push("/");
  };

  render() {
    const {
      firstname,
      updateFirstName,
      middlename,
      updateMiddleName,
      lastname,
      updateLastName,
      email,
      updateEmail,
      phonenumber,
      updatePhonenumber,
      homeAddress,
      updateHomeAddress,
      officeAddress,
      updateOfficeAddress,
      facebookProfile,
      updateFacebookProfile,
      linkedinProfile,
      updateLinkedinProfile,
    } = this.context;

    return (
      <div className="sign-up-form-container">
        <h1>Sign up Form</h1>
        <form className="form-contianer" onSubmit={this.handleSubmit}>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              name="firstname"
              value={firstname}
              onChange={(e) => updateFirstName(e.target.value)}
            />
          </div>
          <div>
            <label>Middle Name:</label>
            <input
              type="text"
              name="middlename"
              value={middlename}
              onChange={(e) => updateMiddleName(e.target.value)}
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastname"
              value={lastname}
              onChange={(e) => updateLastName(e.target.value)}
            />
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="text"
              name="phonenumber"
              value={phonenumber}
              onChange={(e) => updatePhonenumber(e.target.value)}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => updateEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Home Address:</label>
            <input
              type="text"
              name="homeAddress"
              value={homeAddress}
              onChange={(e) => updateHomeAddress(e.target.value)}
            />
          </div>
          <div>
            <label>Office Address:</label>
            <input
              type="text"
              name="officeAddress"
              value={officeAddress}
              onChange={(e) => updateOfficeAddress(e.target.value)}
            />
          </div>
          <div>
            <label>Facebook Profile:</label>
            <input
              type="text"
              name="facebookProfile"
              value={facebookProfile}
              onChange={(e) => updateFacebookProfile(e.target.value)}
            />
          </div>
          <div>
            <label>LinkedIn Profile:</label>
            <input
              type="text"
              name="linkedinProfile"
              value={linkedinProfile}
              onChange={(e) => updateLinkedinProfile(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
