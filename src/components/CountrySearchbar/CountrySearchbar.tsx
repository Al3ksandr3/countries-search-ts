import "./CountrySearchbar.scss";

import React from "react";

import { useGetCSSClassesBasedOnThemeMode } from "../../hooks/useGetCSSClassesBasedOnThemeMode";

import { CountrySearchbarProps } from "../../types/componentTypes";

//------ COMPONENT: START ------ //

export default function CountrySearchbar(props: CountrySearchbarProps) {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = function (
    changeE
  ) {
    props.searchQuerySetter(changeE.target.value);
  };

  const [searchbarClass, searchbarInputClass, searchbarDelimiterClass] =
    useGetCSSClassesBasedOnThemeMode(
      "country-searchbar",
      "country-searchbar__input",
      "country-searchbar__delimiter"
    );

  return (
    <div className={searchbarClass}>
      <img className="country-searchbar__search-icon" />
      <span className={searchbarDelimiterClass} />
      <input
        className={searchbarInputClass}
        placeholder="Search for a country..."
        value={props.searchQuery}
        onChange={handleChange}
      />
    </div>
  );
}

//------ COMPONENT: END ------ //
