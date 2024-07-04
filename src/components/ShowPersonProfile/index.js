// src/components/ShowPersonProfile/index.js

import { Component } from "react";
import UserProfileDetailsContext from "../../context/UserProfileDetailsContext";
import "./index.css";

class ShowPersonProfile extends Component {
  render() {
    return (
      <UserProfileDetailsContext.Consumer>
        {({
          firstname,
          middlename,
          lastname,
          phonenumber,
          email,
          homeAddress,
          officeAddress,
          facebookProfile,
          linkedinProfile,
        }) => (
          <div className="profile-container">
            <h1>Profile Details</h1>
            <div className="profile-detail">
              <strong>First Name:</strong> {firstname}
            </div>
            <div className="profile-detail">
              <strong>Middle Name:</strong> {middlename}
            </div>
            <div className="profile-detail">
              <strong>Last Name:</strong> {lastname}
            </div>
            <div className="profile-detail">
              <strong>Phone Number:</strong> {phonenumber}
            </div>
            <div className="profile-detail">
              <strong>Email:</strong> {email}
            </div>
            <div className="profile-detail">
              <strong>Home Address:</strong> {homeAddress}
            </div>
            <div className="profile-detail">
              <strong>Office Address:</strong> {officeAddress}
            </div>
            <div className="profile-detail">
              <strong>Facebook Profile:</strong> {facebookProfile}
            </div>
            <div className="profile-detail">
              <strong>LinkedIn Profile:</strong> {linkedinProfile}
            </div>
          </div>
        )}
      </UserProfileDetailsContext.Consumer>
    );
  }
}

export default ShowPersonProfile;
