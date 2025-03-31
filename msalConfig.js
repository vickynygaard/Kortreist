let config;
let login;
let signup;

if (process.env.NODE_ENV === "development") {
  const local = require("./msal/msalConfig.local");
  config = local.msalConfig;
  login = local.loginRequest;
  signup = local.signupRequest;
} else {
  const prod = require("./msal/msalConfig.prod");
  config = prod.msalConfig;
  login = prod.loginRequest;
  signup = prod.signupRequest;
}

export const msalConfig = config;
export const loginRequest = login;
export const signupRequest = signup;
