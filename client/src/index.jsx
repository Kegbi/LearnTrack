import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "./redux/store";

import "./fonts.css";
import { GlobalStyle } from "./global.styles";
import theme from "./theme";

import App from "./components/App/App";
import NotificationsWrapper from "./components/notification/notifications-wrapper";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyle />
        <NotificationsWrapper />
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
