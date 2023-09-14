const User = require("../model/userModel");
const asyncHandler = require("express-async-handler");
const axios = require("axios");


// Add user data with weather information
const userDataAdd = asyncHandler(async (req, res) => {
  const { email, location } = req.body;

  if (!email || !location) {
    res.status(400);
    throw new Error("Please fill in all the fields.");
  }
  
  const api_key = process.env.API_KEY;

  try {
    // Get weather data from OpenWeatherMap API
    const weatherResponse = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`
    );

    if (weatherResponse.status !== 200) {
      res.status(500);
      throw new Error("Failed to get weather data.");
    }

    //extract data from the response
    const weatherData = {
      description: weatherResponse.data.weather[0].description,
      temperature: weatherResponse.data.main.temp,
      humidity : weatherResponse.data.main.humidity,
    };
 
    // Create a new user with the  weather data
    const userData = new User({
      email,
      location,
      weatherData, 
    });

    const addedUserData = await userData.save();

    // Return the added user data with weather information in the response
    res.status(201).json(addedUserData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Enter Valid City" });
  }
});

//get all of the user data
const getUserData = asyncHandler(async (req, res) => {
    const users = await User.find();
    res.json(users); 
});

//get user data by ID
const getUserByID = asyncHandler(async (req, res) => {
  const getUserDataID = await User.findById(req.params.id);

  if (getUserDataID) {
    res.json(getUserDataID);
  } else {
    res.status(404).json({ message: "User Data ID not found" });
  }
});


module.exports = {
  getUserData,
  userDataAdd,
  getUserByID,
};