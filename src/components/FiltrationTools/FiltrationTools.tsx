import "./FiltrationTools.scss";

import CountrySearchbar from "../CountrySearchbar/CountrySearchbar";
import RegionFilter from "../RegionFilter/RegionFilter";
import React, { useState } from "react";

//------ COMPONENT: START ------ //

export default function FiltrationTools() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = function (
    submitE: React.FormEvent
  ) {
    submitE.preventDefault();

    if (!searchQuery.trim()) return;

    // API request logic
  };

  return (
    <form className="filtration-tools" onSubmit={handleSubmit}>
      <CountrySearchbar
        searchQuery={searchQuery}
        searchQuerySetter={setSearchQuery}
      />
      <RegionFilter />
    </form>
  );
}
//------ COMPONENT: END ------ //
