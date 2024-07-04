import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import UserProfileDetailsContext from "./context/UserProfileDetailsContext";
import SignupForm from "./components/SignupForm";
import ShowPersonProfile from "./components/ShowPersonProfile";
import "./App.css";

class App extends Component {
  state = {
    firstname: "",
    middlename: "",
    lastname: "",
    phonenumber: "",
    email: "",
    homeAddress: "",
    officeAddress: "",
    facebookProfile: "",
    linkedinProfile: "",
  };

  updateFirstName = (value) => {
    this.setState({ firstname: value });
  };

  updateMiddleName = (value) => {
    this.setState({ middlename: value });
  };

  updateLastName = (value) => {
    this.setState({ lastname: value });
  };

  updatePhonenumber = (value) => {
    this.setState({ phonenumber: value });
  };

  updateEmail = (value) => {
    this.setState({ email: value });
  };

  updateHomeAddress = (value) => {
    this.setState({ homeAddress: value });
  };

  updateOfficeAddress = (value) => {
    this.setState({ officeAddress: value });
  };

  updateFacebookProfile = (value) => {
    this.setState({ facebookProfile: value });
  };

  updateLinkedinProfile = (value) => {
    this.setState({ linkedinProfile: value });
  };

  render() {
    const {
      firstname,
      middlename,
      lastname,
      phonenumber,
      email,
      homeAddress,
      officeAddress,
      facebookProfile,
      linkedinProfile,
    } = this.state;

    return (
      <UserProfileDetailsContext.Provider
        value={{
          firstname,
          updateFirstName: this.updateFirstName,
          middlename,
          updateMiddleName: this.updateMiddleName,
          lastname,
          updateLastName: this.updateLastName,
          email,
          updateEmail: this.updateEmail,
          phonenumber,
          updatePhonenumber: this.updatePhonenumber,
          homeAddress,
          updateHomeAddress: this.updateHomeAddress,
          officeAddress,
          updateOfficeAddress: this.updateOfficeAddress,
          linkedinProfile,
          updateLinkedinProfile: this.updateLinkedinProfile,
          facebookProfile,
          updateFacebookProfile: this.updateFacebookProfile,
        }}
      >
        <>
          <Switch>
            <Route exact path="/sign-up" component={SignupForm} />
            <Route exact path="/" component={ShowPersonProfile} />
          </Switch>
        </>
      </UserProfileDetailsContext.Provider>
    );
  }
}

export default App;
