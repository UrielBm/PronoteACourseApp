import "../styles/reset.css";
import React from "react";
import App from "next/app";
import firebase, { FirebaseContext } from "../firebase";
import useAuhtentication from "../hooks/useAuhtentication";
function MyApp({ Component, pageProps }) {
  const user = useAuhtentication();
  return (
    <>
      <FirebaseContext.Provider
        value={{
          firebase,
          user,
        }}
      >
        <Component {...pageProps} />
      </FirebaseContext.Provider>
    </>
  );
}

export default MyApp;
