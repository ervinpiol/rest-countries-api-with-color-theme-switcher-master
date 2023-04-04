import React from "react";

const Countries = ({ filteredData, searchData, clickCountry, themeMode }) => {
  const data =
    filteredData && searchData
      ? filteredData.filter((country) => searchData.includes(country))
      : filteredData || searchData;

  return (
    <div className="flex gap-20 max-w-[1440px] w-full mx-auto px-12 flex-wrap gap-y-0 xl:justify-center md:gap-x-10 sm:gap-0">
      {data.map((country, i) => (
        <div
          key={i}
          className={`${themeMode} rounded-md w-[276px] shadow-lg cursor-pointer sm:w-full mb-20`}
          onClick={() => clickCountry(country)}
        >
          <img
            src={country.flags.png}
            alt={country.name}
            className="rounded-t-md h-44 w-full shadow-sm"
          />
          <div className="p-7 flex flex-col gap-1">
            <h2 className="font-extrabold text-xl pb-3">{country.name}</h2>
            <p className="font-semibold">
              Population:{" "}
              <span className="font-light">
                {country.population.toLocaleString()}
              </span>
            </p>
            <p className="font-semibold">
              Region: <span className="font-light">{country.region}</span>
            </p>
            <p className="font-semibold">
              Capital:{" "}
              <span className="font-light">
                {country.capital ? country.capital : "None"}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countries;
