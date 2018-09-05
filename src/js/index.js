import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import App from "./components/App";
import AppRoutes from './routes';

render(
    <Provider store={store}>
        <AppRoutes/>
    </Provider>,
    document.getElementById("app")
);