import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

// Redux
// import { combineReducers } from "redux";
// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import productReducer from "./store/reducers/products";

// Context API
// import ProductsContextProvider from "./context/products-context";

// CUSTOM HOOK useStore
import configureProductsStore from "./hooks-store/products-store";

configureProductsStore();

// Redux
// const rootReducer = combineReducers({
//   shop: productReducer,
// });

// const store = createStore(rootReducer);

ReactDOM.render(
  // Context API
  // <ProductsContextProvider>
  //   <BrowserRouter>
  //     <App />
  //   </BrowserRouter>
  // </ProductsContextProvider>,

  // Redux
  // <Provider store={store}>
  //   <BrowserRouter>
  //     <App />
  //   </BrowserRouter>
  // </Provider>,

  // CUSTOM HOOK useStore
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
