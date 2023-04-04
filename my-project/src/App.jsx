import React, { useState } from "react";
import Countries from "./components/Countries";
import Header from "./components/Header";
import Search from "./components/Search";
import data from "../src/constants/data.json";
import SelectedCountry from "./components/SelectedCountry";

function App() {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [searchedCountry, setSearchedCountry] = useState(null);
  const [selectCountry, setSelectCountry] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const searchCountry = (name) => {
    setSearchedCountry(name);
    setSearchedCountry(name.target.value);
    setInputValue(name.target.value);
  };

  const filteredData = selectedRegion
    ? data.filter((country) => country.region === selectedRegion)
    : data;

  const searchData = searchedCountry
    ? data.filter((country) =>
        country.name.toLowerCase().includes(searchedCountry.toLowerCase())
      )
    : data;

  const clickCountry = (country) => {
    setSelectedCountry(country);
    setSelectCountry(true);
  };

  const themeMode = darkMode
    ? "bg-DarkElements text-DarkTextColor"
    : "bg-Elements text-TextColor";

  return (
    <div
      className={`App w-full mx-auto ${
        darkMode ? "bg-DarkBackground" : "bg-LightBackground"
      } ${selectCountry || searchedCountry ? "h-screen" : "h-full"}`}
    >
      <Header
        setDarkMode={setDarkMode}
        themeMode={themeMode}
        darkMode={darkMode}
      />
      {selectCountry ? (
        <SelectedCountry
          setSelectCountry={setSelectCountry}
          country={selectedCountry}
          themeMode={themeMode}
          darkMode={darkMode}
        />
      ) : (
        <>
          <Search
            setSelectedRegion={setSelectedRegion}
            searchCountry={searchCountry}
            selectedRegion={selectedRegion}
            inputValue={inputValue}
            themeMode={themeMode}
          />
          <Countries
            filteredData={filteredData}
            searchData={searchData}
            clickCountry={clickCountry}
            themeMode={themeMode}
          />
        </>
      )}
    </div>
  );
}

export default App;
