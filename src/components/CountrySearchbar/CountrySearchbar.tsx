import "./CountrySearchbar.scss";

import React from "react";

import { useGetCSSClassBasedOnThemeMode } from "../../hooks/useGetCSSClassBasedOnThemeMode";

import { CountrySearchbarProps } from "../../types/componentTypes";

//------ COMPONENT: START ------ //

export default function CountrySearchbar(props: CountrySearchbarProps) {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = function (
    changeE
  ) {
    props.searchQuerySetter(changeE.target.value);
  };

  const searchIcon = useGetCSSClassBasedOnThemeMode("jkaskdha");

  return (
    <span className="country-searchbar">
      <img className="country-searchbar__search-icon" />
      <input
        className="country-searchbar__input"
        placeholder="Search for a country..."
        value={props.searchQuery}
        onChange={handleChange}
      />
    </span>
  );
}

//------ COMPONENT: END ------ //
