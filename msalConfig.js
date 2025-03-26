let config;
let login;

if (process.env.NODE_ENV === "development") {
  const local = require("./msal/msalConfig.local");
  config = local.msalConfig;
  login = local.loginRequest;
} else {
  const prod = require("./msal/msalConfig.prod");
  config = prod.msalConfig;
  login = prod.loginRequest;
}

export const msalConfig = config;
export const loginRequest = login;
