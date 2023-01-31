import App from "./components/App/App";

import { Provider } from "react-redux";

import { store } from "./store/store";

// ------ COMPONENT: START ------ //

export default function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

// ------ COMPONENT: END ------ //
