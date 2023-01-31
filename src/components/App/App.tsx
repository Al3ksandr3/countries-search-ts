import "./App.scss";

import Header from "../Header/Header";
import Main from "../Main/Main";

import { useGetCSSClassesBasedOnThemeMode } from "../../hooks/useGetCSSClassesBasedOnThemeMode";

//------ COMPONENT: START ------ //

export default function App() {
  const [appClass] = useGetCSSClassesBasedOnThemeMode("app");

  return (
    <div className={appClass}>
      <Header />
      <Main />
    </div>
  );
}

//------ COMPONENT: END ------ //
