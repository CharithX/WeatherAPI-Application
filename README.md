# WeatherAPI-Application
# Instruction

 1. Install the node dependencies - npm install 
 2. Start the project - npm start

## About
**Overview:**

The Weather Forecast Service is a backend application that allows users  provide their location information (city name). The system retrieves real-time weather data for the specified location and provides users with weather updates, including temperature, humidity, and a weather description

**Features:**

1.  **User Registration:**
    -   Users can enter the system by providing their email address and location.
    -   Users can input their preferred location by specifying the city name.
    - 
3.  **Weather Updates:**
    
    -   The system fetches weather data for the user's specified city from a weather data provider (e.g., OpenWeatherMap) and displays the following information:
        -   Current temperature.
        -   Humidity level.
        -   A brief description of the weather conditions (e.g., "partly cloudy").
4.  **Scheduled Weather Updates (Future development):**
    
    -   As a future enhancement, the system will offer a feature for users to receive scheduled weather updates via email. Every three hours, the system will send an email to the user's registered email address with the latest weather information for their chosen city.

**Technical Stack:**

-   **Backend:** Node.js with Express.js
-   **Database:** MongoDB for user data storage
-   **API Integration:** Integration with a weather data provider API (e.g., OpenWeatherMap)
-   **Email Integration (Future development):** Node.js packages for sending scheduled email updates (e.g., Nodemailer)

**Project Flow:**
1.  Users can input their desired city name as their location.
3.  The system fetches weather data from the weather data provider using the provided city name.
4.  Weather data, including temperature, humidity, and description, is displayed to the user.
5.  As a future enhancement, the system will periodically send weather updates via email to registered users.

**Benefits:**

-   Provides users with real-time weather information for their chosen location.
-   Offers the convenience of receiving periodic weather updates via email (future feature)..


##  Files

Secure file in stored in separate file  called .env   for run application easily I'm addinig secured keys as well.

 -  API key 
 -  MongoDB URL
 -  Node server running PORT

## POSTMAN API 
 1. **Checking API**- https://api.openweathermap.org/data/2.5/weather?&appid=d959e62b1d610d74b46b04810d6ce5f6&q=new york

 2. **Get all user data**- http://localhost:5000/users/get
 3. **Add  single user data**-http://localhost:5000/users/add
JSON request  body for post-request
{
"email":  "jacobmaoma33@gmail.com",
"location":  "toronto"
}
 4. **Get single-user data -**http://localhost:5000/users/get/650314ffd1eaa10680f85a4c
