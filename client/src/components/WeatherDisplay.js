 
const WeatherDisplay = ({ weather }) => {
    if (!weather) return <p className="text-center text-gray-600">Search for a city to get started.</p>;
  
    return (
      <div className="p-4 border rounded-md shadow-md bg-white text-center">
        <h2 className="text-xl font-semibold">{weather.city}</h2>
        <p className="text-gray-700">{weather.description}</p>
        <p className="text-2xl font-bold">{weather.temperature}°C</p>
        <p className="text-gray-500">Humidity: {weather.humidity}%</p>
      </div>
    );
  };
  
  export default WeatherDisplay;
  