import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as regularMoon } from "@fortawesome/free-regular-svg-icons";
import { faMoon as solidMoon } from "@fortawesome/free-solid-svg-icons";

const Header = ({ setDarkMode, themeMode, darkMode }) => {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`${themeMode} w-full shadow-sm`}>
      <div className=" flex justify-between max-w-[1440px] w-full mx-auto px-12 py-6 sm:px-5 sm:py-10">
        <h1 className="font-extrabold text-[26px] sm:text-xl">
          Where in the world?
        </h1>
        <button
          className="font-semibold flex gap-3 items-center"
          onClick={toggleDarkMode}
        >
          <FontAwesomeIcon icon={darkMode ? solidMoon : regularMoon} />
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export default Header;
