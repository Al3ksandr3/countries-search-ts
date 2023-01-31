import "./App.scss";

import Header from "../Header/Header";
import Main from "../Main/Main";

import { useGetCSSClassBasedOnThemeMode } from "../../hooks/useGetCSSClassBasedOnThemeMode";

//------ COMPONENT: START ------ //

export default function App() {
  const appClass = useGetCSSClassBasedOnThemeMode("app");

  return (
    <div className={appClass}>
      <Header />
      <Main />
    </div>
  );
}

//------ COMPONENT: END ------ //
