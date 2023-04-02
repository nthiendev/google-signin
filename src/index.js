import React from "react";
import ReactDOM from "react-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App";

ReactDOM.render(
  <GoogleOAuthProvider clientId="625477699289-si3vmtkb1i70mb1abing36cvm2eclaov.apps.googleusercontent.com">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>,
  document.getElementById("root")
);
