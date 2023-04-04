import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Search = ({
  searchCountry,
  setSelectedRegion,
  selectedRegion,
  inputValue,
  themeMode,
}) => {
  const [toggleRegion, setToggleRegion] = useState(false);

  const handleFilterClick = () => {
    setToggleRegion(!toggleRegion);
  };

  const filterRegion = (region) => {
    setSelectedRegion(region);
    setToggleRegion(false);
  };

  const buttons = [
    { label: "Africa", region: "Africa" },
    { label: "America", region: "Americas" },
    { label: "Asia", region: "Asia" },
    { label: "Europe", region: "Europe" },
    { label: "Oceania", region: "Oceania" },
  ];

  return (
    <div
      className={`flex justify-between items-center max-w-[1440px] w-f
      mx-auto p-12 text-${themeMode} relative md:flex-col md:gap-12 md:items-start sm:p-5 sm:pb-14`}
    >
      <div
        className={`${themeMode} py-4 w-[500px] rounded-md shadow-lg flex items-center md:w-full`}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} className="px-7" />
        <input
          type="text"
          placeholder="Search for a country..."
          className={`${themeMode} bg-transparent placeholder-${themeMode} outline-none w-4/5 sm:w-3/4`}
          value={inputValue}
          onChange={searchCountry}
        />
      </div>
      <div
        className={`${themeMode} px-5 py-4 rounded-md shadow-lg cursor-pointer`}
        onClick={handleFilterClick}
      >
        <p className="flex gap-10 items-center">
          Filter by Region
          <FontAwesomeIcon
            icon={faChevronDown}
            style={{
              transition: "all 220ms linear",
              transform: toggleRegion ? "rotate(180deg)" : "",
            }}
          />
        </p>
      </div>
      <AnimatePresence>
        {toggleRegion && (
          <motion.div
            className={`${themeMode} px-6 py-4 flex flex-col items-start absolute top-[108px] right-12 w-[207px] rounded-md shadow-md gap-2 sm:left-5 sm:top-[185px] md:left-12 md:top-[212px] `}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.2 }}
          >
            {buttons.map((button) => (
              <button
                key={button.region}
                onClick={() => filterRegion(button.region)}
                className={
                  selectedRegion === button.region ? "font-extrabold" : ""
                }
              >
                {button.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Search;
