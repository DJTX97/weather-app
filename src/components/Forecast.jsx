import { useEffect } from "react";

const Forecast = ({ info }) => {
  
  //for analyzing received data
  useEffect(() => {
    console.log(info);
  }, [info]);

  //Algorithm to display location in uppercase.
  const arr = info.loc.split(" ");

  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  const place = arr.join(" ");

  return (
    <>
      <div className="flex flex-col hover:scale-105 transition-all bg-white border-4 border-green-400 rounded-xl text-xl font-semibold px-3 py-2">
        <div className="border-b-2 pb-1">Location: {place}</div>
        <div className="border-b-2 pb-1">Avg. temperature: {info.temp}°C</div>
        <div className="border-b-2 pb-1">Humidity: {info.humidity}%</div>
        <div>Avg. wind speed: {info.wind_speed} km/h</div>
      </div>
    </>
  );
};

export default Forecast;
