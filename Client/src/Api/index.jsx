import React from "react"
const baseUrl = "http://localhost:3005/api"


//signup api

// export const getAdminSignup = `${baseUrl}/hsadmin/adminSignup`;
export const getInteriorDesignerSignup = `${baseUrl}/hsinteriordesigner/interiorDesignerSignup`;
export const getUserSignup = `${baseUrl}/hsuser/userSignup`;
export const getArchitectSignup = `${baseUrl}/hsarchitect/architectSignup`;

//Login api

export const getUserLogin = `${baseUrl}/hsuser/userLogin`;
export const getInteriorDesignerLogin = `${baseUrl}/hsinteriordesigner/interiorDesignerLogin`;
export const getArchitectLogin = `${baseUrl}/hsarchitect/architectLogin`;
export const getAdminLogin = `${baseUrl}/hsadmin/adminLogin`;
