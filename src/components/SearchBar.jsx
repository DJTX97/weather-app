import { useState, useEffect } from "react";
import Forecast from "./Forecast";

const SearchBar = () => {
  const [search, setSearch] = useState(""); // input field state
  const [location, setLocation] = useState(""); // submit request state
  const [info, setInfo] = useState({}); // available data state
  const [isSubmitted, setSubmitted] = useState(false); // submission status state

  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${location}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_SECRET_KEY,
      "X-RapidAPI-Host": import.meta.env.VITE_HOST,
    },
  };

  const myFetcher = () => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => setInfo({ ...data, loc: location }))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmitClicked = () => {
    isSubmitted == true && setSubmitted(false);
    setLocation(search);
    setSubmitted(true);
  };

  const handleSubmitEnter = (e) => {
    if (e.key === "Enter") {
      isSubmitted == true && setSubmitted(false);
      setLocation(search);
      setSubmitted(true);
    }
  };

  useEffect(() => {
    if (isSubmitted == true) {
      myFetcher();
    }
    //console.log(location);
    //console.log(isSubmited);
    //console.log(info);
  }, [location, isSubmitted]);

  return (
    <>
      <div className="flex rounded-full shadow-md shadow-gray-500">
        <input
          type="text"
          value={search}
          onChange={handleChange}
          onKeyDown={handleSubmitEnter}
          className="focus:outline-none rounded-l-full pl-5 py-3 md:py-1 text-2xl md:text-lg"
          placeholder="Search..."
        ></input>
        <button
          className="bg-slate-400 rounded-r-full px-5 py-1 md:px-3 hover:bg-slate-300 flex items-center"
          onClick={handleSubmitClicked}
        >
          <img src="src\assets\icons\search.svg" width={18} />
        </button>
      </div>

      {info.loc !== undefined && isSubmitted && <Forecast info={info} />}
    </>
  );
};

export default SearchBar;
