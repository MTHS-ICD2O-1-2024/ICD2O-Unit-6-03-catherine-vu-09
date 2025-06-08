// Copyright (c) 2025 Mr. Coxall All rights reserved
//
// Created by: Catherine Vu
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function gets the weather today.
 * The "async" is there because it will take time for the internet to return the value
 */
async function getWeather() {
  // the "try" is here because the internet may not be working
  // it is like an "if ... else" statement"
  try {
    const resultJSON = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5")
    const jsonData = await resultJSON.json()
    console.log(jsonData)
    const tempKelvin = jsonData.main.temp
    const tempCelsius = tempKelvin - 273.15

    // output
    document.getElementById("weather-today").innerHTML = tempCelsius.toFixed(1) + " °C"
  } catch (error) {
    console.error(error)
  }
}