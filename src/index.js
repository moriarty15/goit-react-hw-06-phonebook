import reactDom from "react-dom";
import App from "./App";
import {store, persistor} from "./redux/store";
import { Provider } from "react-redux";
import "modern-normalize/modern-normalize.css";
import { PersistGate } from 'redux-persist/integration/react'

reactDom.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
 </Provider >
  ,
  document.getElementById("root")
);
