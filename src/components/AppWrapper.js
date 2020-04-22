import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux/reduxHelpers";
import App from "./App";

export default function AppWrapper() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}