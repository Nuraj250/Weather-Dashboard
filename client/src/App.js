import { useState } from "react";
import SearchForm from "./components/SearchForm";
import WeatherDisplay from "./components/WeatherDisplay";
import { fetchWeather } from "./services/weatherService";

const App = () => {
  const [weather, setWeather] = useState(null);

  const handleSearch = async (city) => {
    const data = await fetchWeather(city);
    setWeather(data);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Weather Dashboard</h1>
      <SearchForm onSearch={handleSearch} />
      <div className="mt-4 w-full max-w-md">
        <WeatherDisplay weather={weather} />
      </div>
    </div>
  );
};

export default App;
