import "./App.scss";

import Header from "../Header/Header";

import { useGetCSSClassBasedOnThemeMode } from "../../hooks/useGetCSSClassBasedOnThemeMode";

//------ COMPONENT: START ------ //

export default function App() {
  const appClass = useGetCSSClassBasedOnThemeMode("app");

  return (
    <div className={appClass}>
      <Header />
    </div>
  );
}

//------ COMPONENT: END ------ //
