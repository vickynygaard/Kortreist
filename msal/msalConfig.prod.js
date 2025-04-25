export const msalConfig = {
    auth: {
      clientId: "45b5bd46-89bd-41ac-a235-7762e00b197e",
      authority: "https://kortreist.b2clogin.com/kortreist.onmicrosoft.com/B2C_1_SignUpSignIn",
      knownAuthorities: ["kortreist.b2clogin.com"],
      redirectUri: "https://vickynygaard.github.io/Kortreist/login/",
      postLogoutRedirectUri: "https://vickynygaard.github.io/Kortreist/login/",
    },
    cache: {
      cacheLocation: "localStorage",
      storeAuthStateInCookie: true,
    }
  };
  
  export const loginRequest = {
    scopes: ["openid", "profile", "email", "https://kortreist.onmicrosoft.com/user_impersonation/user_impersonation" 
  ]
  };

  export const signupRequest = {
    scopes: [
      "openid",
      "profile",
      "email",
      "https://kortreist.onmicrosoft.com/user_impersonation/user_impersonation"
    ],
    authority: "https://kortreist.b2clogin.com/kortreist.onmicrosoft.com/B2C_1_SignUp"
  };