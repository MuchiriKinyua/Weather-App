# Weather App 🌤️ </br>

![Screenshot from 2024-12-25 07-56-59](https://github.com/user-attachments/assets/28f4402a-6741-4b03-9ec7-9da516998074) </br>

A simple, responsive weather application that allows users to search for current weather details of any city using OpenWeather API. </br>

## Features </br>
- Search for a city's weather by name. </br>
- Displays: </br>
  - City name. </br>
  - Current temperature. </br>
  - Humidity percentage. </br>
  - Wind speed. </br>
  - Weather condition with an icon. </br>
- Handles invalid city names with an error message. </br>
- Responsive design with a clean, modern UI. </br>

## How It Works </br>
1. Enter a city name in the search bar. </br>
2. Click the search button or press "Enter" to fetch the weather data. </br>
3. If the city is valid, weather details are displayed. If not, an error message is shown. </br>

## Technologies Used </br>
- **HTML5**: Markup structure. </br>
- **CSS3**: Styling and layout. </br>
- **JavaScript**: Functionality and API integration. </br>
- **OpenWeather API**: Weather data provider. </br>

## Setup Instructions </br>
1. Clone the repository:
   ```bash
   git clone https://github.com/MuchiriKinyua/weather-app.git

    Navigate to the project directory:

    cd weather-app

    Open index.html in your browser to view the application.

Configuration

    Replace the apiKey in script.js with your own OpenWeather API key:

    const apiKey = "your-api-key";

## Folder Structure

weather-app/ </br>
├── index.html       # Main HTML file </br>
├── style.css        # Styling for the app </br>
├── script.js        # JavaScript logic for the app </br>
├── images/          # Icons for weather conditions </br>
└── README.md        # Documentation

## Known Issues </br>

    Error handling could be improved for network issues.
    Only basic weather data is displayed. Future enhancements could include extended forecasts.
