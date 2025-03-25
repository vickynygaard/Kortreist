export const msalConfig = {
    auth: {
      clientId: "8c273982-9bae-4667-8180-375d552c93ea", 
      authority: "https://bouvetB2Ctenant.b2clogin.com/bouvetB2Ctenant.onmicrosoft.com/B2C_1_SignUpSignIn",
      knownAuthorities: ["bouvetB2Ctenant.b2clogin.com"],
      redirectUri: "https://vickynygaard.github.io/Kortreist/",
      postLogoutRedirectUri: "https://vickynygaard.github.io/Kortreist/",
    },
    cache: {
      cacheLocation: "sessionStorage",
      storeAuthStateInCookie: false,
    }
  };
  
  export const loginRequest = {
    scopes: ["openid", "profile", "email", "https://bouvetB2Ctenant.onmicrosoft.com/user_impersonation/user_impersonation" 
  ]
  };