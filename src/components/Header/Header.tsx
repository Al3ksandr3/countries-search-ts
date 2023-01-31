import "./Header.scss";

import ModeSwitcher from "../ModeSwitcher/ModeSwitcher";

//------ COMPONENT: START ------ //

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__platform-name">Where is the world?</h1>
      {/* <ModeSwitcher/> */}
    </header>
  );
}
//------ COMPONENT: END ------ //
