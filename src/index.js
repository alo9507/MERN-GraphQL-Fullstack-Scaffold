import React from "react";
import ReactDOM from "react-dom";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import { createStore } from "redux";
import reducers from "redux/reducers";
import { Provider } from "react-redux";

import App from "components/App";

const store = createStore(reducers);

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
