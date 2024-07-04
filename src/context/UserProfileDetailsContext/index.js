import React from "react";

const UserProfileDetailsContext = React.createContext({
  firstname: "",
  updateFirstName: () => {},
  lastname: "",
  updateLastName: () => {},
  middlename: "",
  updateMiddleName: () => {},
  phonenumber: "",
  updatePhonenumber: () => {},
  email: "",
  updateEmail: () => {},
  homeAddress: "",
  updateHomeAddress: () => {},
  officeAddress: "",
  updateOfficeAddress: () => {},
  facebookProfile: "",
  updateFacebookProfile: () => {},
  linkedinProfile: "",
  updateLinkedinProfile: () => {},
});

export default UserProfileDetailsContext;
