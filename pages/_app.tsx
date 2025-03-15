import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import '@/styles/globals.css';
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "../msalConfig";

const msalInstance = new PublicClientApplication(msalConfig);

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    msalInstance.initialize()
      .then(() => {
        return msalInstance.handleRedirectPromise();
      })
      .then(response => {
        if (response) {
          console.log("Redirect response:", response);
        }
      })
      .catch(error => {
        console.error("Error handling redirect:", error);
      });
  }, []);

  return (
    <MsalProvider instance={msalInstance}>
      <ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange>
        <Component {...pageProps} />
      </ThemeProvider>
    </MsalProvider>
  );
}
