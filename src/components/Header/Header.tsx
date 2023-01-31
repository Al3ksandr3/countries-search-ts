import "./Header.scss";

import ModeSwitcher from "../ModeSwitcher/ModeSwitcher";

import { useGetCSSClassesBasedOnThemeMode } from "../../hooks/useGetCSSClassesBasedOnThemeMode";

//------ COMPONENT: START ------ //

export default function Header() {
  const [headerClass] = useGetCSSClassesBasedOnThemeMode("header");

  return (
    <header className={headerClass}>
      <h1 className="header__platform-name">Where in the world?</h1>
      <ModeSwitcher />
    </header>
  );
}
//------ COMPONENT: END ------ //
