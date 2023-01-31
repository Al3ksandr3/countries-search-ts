import "./index.scss";

import ReactDOM from "react-dom/client";

import App from "./components/App/App";

const rootElement = document.querySelector("#root")!;

const appRoot = ReactDOM.createRoot(rootElement);

appRoot.render(<App />);
