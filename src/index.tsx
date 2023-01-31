import "./index.scss";

import ReactDOM from "react-dom/client";

import Root from "./Root";

const rootElement = document.querySelector("#root")!;

const appRoot = ReactDOM.createRoot(rootElement);

appRoot.render(<Root />);
