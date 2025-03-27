export const msalConfig = {
    auth: {
      //Default: 640cd4bc-39b6-425f-befb-3a7ac41eb14e
      //Ngrok: b6479e0f-bf41-4306-8ac9-ec83012a11c4
      clientId: "640cd4bc-39b6-425f-befb-3a7ac41eb14e",
      authority: "https://bouvetB2Ctenant.b2clogin.com/bouvetB2Ctenant.onmicrosoft.com/B2C_1_SignUpSignIn",
      knownAuthorities: ["bouvetB2Ctenant.b2clogin.com"],

      //Default: http://localhost:3000/login/
      //Ngrok: https://DIN-LENKE-NGROK.app/login/
      //ngrok http 3000 --url https://DIN-LENKE-NGROK.ngrok-free.app
      redirectUri: "http://localhost:3000/login/",
      postLogoutRedirectUri: "http://localhost:3000/login/",
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