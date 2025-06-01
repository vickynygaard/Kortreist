export const msalConfig = {
    auth: {
      clientId: "dd0b2515-f4ec-49bd-81e1-25458b0f33be",
      authority: "https://bouvetB2Ctenant.b2clogin.com/bouvetB2Ctenant.onmicrosoft.com/B2C_1_SignUpSignIn",
      knownAuthorities: ["bouvetB2Ctenant.b2clogin.com"],
      redirectUri: "https://vickynygaard.github.io/Kortreist/login/",
      postLogoutRedirectUri: "https://vickynygaard.github.io/Kortreist/login/",
    },
    cache: {
      cacheLocation: "localStorage",
      storeAuthStateInCookie: true,
    }
  };
  
  export const loginRequest = {
    scopes: ["openid", "profile", "email", "https://bouvetB2Ctenant.onmicrosoft.com/user_impersonation1/user_impersonation" 
  ]
  };

  export const signupRequest = {
    scopes: [
      "openid",
      "profile",
      "email",
      "https://bouvetB2Ctenant.onmicrosoft.com/user_impersonation1/user_impersonation"
    ],
    authority: "https://bouvetB2Ctenant.b2clogin.com/bouvetB2Ctenant.onmicrosoft.com/B2C_1_SignUp"
  };