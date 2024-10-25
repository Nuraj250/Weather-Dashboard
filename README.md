# Weather Dashboard

A web application built with React and Node.js that provides real-time weather information for cities around the world. Users can search for a city to view the current weather conditions, including temperature, humidity, and descriptions.

## Features
- Search for real-time weather information by city.
- Display temperature, humidity, and weather conditions.
- Responsive design for a seamless experience on both desktop and mobile.
- Fetch weather data from an external API (OpenWeatherMap or Weatherstack).

## Tech Stack
- **Frontend**: React, Axios, TailwindCSS (for styling)
- **Backend**: Node.js, Express (optional for API proxying)
- **External API**: OpenWeatherMap or Weatherstack for weather data

## Prerequisites
- Node.js and npm installed on your machine.
- API key from a weather data provider like OpenWeatherMap.

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/weather-dashboard.git
cd weather-dashboard
```

### 2. Install dependencies for the backend (if using a proxy)
```bash
cd server
npm install
```

### 3. Create a `.env` file in the `server` directory (for backend proxy)
Set up the following environment variables:
```
PORT=5000
WEATHER_API_KEY=your_openweathermap_api_key
```

### 4. Start the backend server (if using a proxy)
```bash
npm start
```

### 5. Install dependencies for the frontend
Open a new terminal window and run:
```bash
cd client
npm install
```

### 6. Create a `.env` file in the `client` directory (for frontend)
Set up the following environment variable:
```
REACT_APP_BACKEND_URL=http://localhost:5000  # If using backend
# OR
REACT_APP_WEATHER_API_KEY=your_openweathermap_api_key  # If fetching data directly
```

### 7. Start the React frontend
```bash
npm start
```

The React app will run on `http://localhost:3000` by default, and the backend server will run on `http://localhost:5000`.

## Usage
1. Open the app in your browser.
2. Enter a city name in the search bar.
3. View the current weather details for the specified city.
4. See temperature, humidity, and weather conditions instantly.

## Project Structure
```
weather-dashboard/
├── server/                 # Node.js/Express backend (optional)
│   ├── .env                # Environment variables for server
│   ├── index.js            # Entry point for the server
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components (WeatherDisplay, SearchForm, etc.)
│   │   ├── services/       # API calls
│   │   ├── .env            # Environment variables for client
│   │   └── App.js          # Main React component
│   └── public/
├── README.md               # Project documentation
```

## Contributing
1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- [OpenWeatherMap API](https://openweathermap.org/api)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
