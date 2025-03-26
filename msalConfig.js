import { msalConfig as prodConfig, loginRequest as prodLogin } from "./msal/msalConfig.prod";
import { msalConfig as localConfig, loginRequest as localLogin } from "./msal/msalConfig.local";

const isDev = process.env.NODE_ENV === "development";

export const msalConfig = isDev ? localConfig : prodConfig;
export const loginRequest = isDev ? localLogin : prodLogin;
