import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import "./index.css";
import App from "./App";
import Layout from "./components/Layout/Layout";
import rootReducer from "./redux/reducers";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const store = createStore(rootReducer, applyMiddleware(thunk));

export const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <Provider store={store}>
    <Layout>
      <App />
    </Layout>
  </Provider>,
  document.getElementById("root")
);
