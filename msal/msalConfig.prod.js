export const msalConfig = {
    auth: {
      clientId: "640cd4bc-39b6-425f-befb-3a7ac41eb14e",
      authority: "https://bouvetB2Ctenant.b2clogin.com/bouvetB2Ctenant.onmicrosoft.com/B2C_1_SignUpSignIn",
      knownAuthorities: ["bouvetB2Ctenant.b2clogin.com"],
      redirectUri: "https://vickynygaard.github.io/Kortreist/login/",
      postLogoutRedirectUri: "https://vickynygaard.github.io/Kortreist/login/",
    },
    cache: {
      cacheLocation: "localStorage",
      storeAuthStateInCookie: false,
    }
  };
  
  export const loginRequest = {
    scopes: ["openid", "profile", "email", "https://bouvetB2Ctenant.onmicrosoft.com/user_impersonation/user_impersonation" 
  ]
  };