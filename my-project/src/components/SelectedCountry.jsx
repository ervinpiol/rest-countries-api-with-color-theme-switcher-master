import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

const SelectedCountry = ({
  setSelectCountry,
  country,
  themeMode,
  darkMode,
}) => {
  const backClick = () => {
    setSelectCountry(false);
  };
  return (
    <div
      className={`${
        darkMode ? "text-DarkTextColor" : "text-TextColor"
      } max-w-[1440px] w-full mx-auto px-12 sm:px-6`}
    >
      <button
        className={`${themeMode} flex gap-3 items-center px-10 py-2.5 rounded-md my-20 shadow-lg font-semibold xl:mt-12`}
        onClick={backClick}
      >
        <FontAwesomeIcon icon={faArrowLeftLong} />
        Back
      </button>
      <div className="flex gap-36 items-center xl:flex-col xl:items-start xl:gap-20 ">
        <img
          src={country.flag}
          alt={country.name}
          className="w-[600px] shadow-lg xl:w-auto"
        />
        <div>
          <h1 className="text-4xl font-extrabold pb-9 xl:text-6xl lg:text-5xl md:text-4xl">
            {country.name}
          </h1>
          <div className="flex gap-28 font-semibold xl:text-xl md:text-base sm:flex-col sm:gap-14">
            <div className="flex flex-col gap-2 font-semibold">
              <p>
                Native Name:{" "}
                <span className="font-light">{country.nativeName}</span>
              </p>
              <p>
                Population:{" "}
                <span className="font-light">
                  {country.population.toLocaleString()}
                </span>
              </p>
              <p>
                Region: <span className="font-light">{country.region}</span>
              </p>
              <p>
                Sub Region:{" "}
                <span className="font-light">{country.subregion}</span>
              </p>
              <p>
                Capital:{" "}
                <span className="font-light">
                  {country.capital ? country.capital : "None"}
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p>
                Top Level Domain:{" "}
                <span className="font-light">{country.topLevelDomain}</span>
              </p>
              <p>
                Currencies:{" "}
                <span className="font-light">
                  {country.currencies &&
                  country.currencies[0] &&
                  country.currencies[0].name
                    ? country.currencies[0].name
                    : "None"}
                </span>
              </p>

              <p>
                Languages:{" "}
                <span className="font-light">
                  {country.languages
                    .map((language) => language.name)
                    .join(", ")}
                </span>
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-center pt-16 text-sm xl:mb-16 xl:text-xl md:text-base sm:flex-col sm:items-start sm:pt-14">
            <p className="font-semibold text-base xl:text-xl md:text-base">
              Border Countries:
            </p>
            <div className="flex gap-5 sm:gap-3">
              {country.borders && country.borders.length > 0 ? (
                country.borders.slice(0, 3).map((border, index) => (
                  <p
                    className={`${themeMode} w-28 text-center py-1 rounded-sm shadow-md font-semibold sm:w-[106px] md:text-base`}
                    key={index}
                  >
                    {border}
                  </p>
                ))
              ) : (
                <p className="text-base">No border countries.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedCountry;
