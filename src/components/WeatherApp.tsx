"use client";

import { useState, useMemo, useTransition } from "react";
import SearchBar from "./SearchBar";
import WeatherDisplay from "./WeatherDisplay";
import PreviousSearches from "./PreviousSearches";

const WeatherApp: React.FC = () => {
  const [city, setCity] = useState("");
  const [searches, setSearches] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const handleSearch = (city: string) => {
    startTransition(() => {
      setCity(city);
      setSearches((prev) => [...prev, city]);
    });
  };

  const memoizedWeatherDisplay = useMemo(
    () => <WeatherDisplay city={city} />,
    [city]
  );

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      {isPending ? <div>Loading...</div> : memoizedWeatherDisplay}
      <PreviousSearches searches={searches} />
    </div>
  );
};

export default WeatherApp;