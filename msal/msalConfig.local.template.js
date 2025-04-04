export const msalConfig = {
  auth: {

    //Default: 45b5bd46-89bd-41ac-a235-7762e00b197e
    //LocalTunnel: bb5c02f9-84c2-41ac-86ee-e34d818257cb

    //clientId: "bb5c02f9-84c2-41ac-86ee-e34d818257cb",
    clientId: "45b5bd46-89bd-41ac-a235-7762e00b197e",
    authority: "https://kortreist.b2clogin.com/kortreist.onmicrosoft.com/B2C_1_SignUpSignIn",
    knownAuthorities: ["kortreist.b2clogin.com"],
    
  // lt --port 3000 --subdomain DIN-LOCAL-TUNNEL-LINK

      //LocalTunnel: https://DIN-LOCAL-TUNNEL-LINK.loca.lt/login/
      //Default: http://localhost:3000/login/  
    
    redirectUri: "http://localhost:3000/login/",
    postLogoutRedirectUri: "http://localhost:3000/login/",
    //redirectUri: "https://DIN-LOCAL-TUNNEL-LINK.loca.lt/login/",
    //postLogoutRedirectUri: "https://DIN-LOCAL-TUNNEL-LINK.loca.lt/login/",
  
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
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