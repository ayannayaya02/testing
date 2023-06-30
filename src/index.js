import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Weather from "./weather";

import ReactAnimatedWeather from "react-animated-weather";

import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>Weather</h1>
      <h2>78 °F </h2>

      <ReactAnimatedWeather
        icon={"PARTLY_CLOUDY_DAY"}
        color={"black"}
        size={50}
        animate={true}
      />
      <Weather />
      <br />
      <div class="container">
        <div>Mon</div>
        <ReactAnimatedWeather
          icon={"PARTLY_CLOUDY_DAY"}
          color={"goldenrod"}
          size={50}
          animate={true}
        />

        <div>Tues</div>

        <ReactAnimatedWeather
          icon={"PARTLY_CLOUDY_DAY"}
          color={"goldenrod"}
          size={50}
          animate={true}
        />
        <div>Wed</div>

        <ReactAnimatedWeather
          icon={"PARTLY_CLOUDY_DAY"}
          color={"goldenrod"}
          size={50}
          animate={true}
        />
        <div>Thurs</div>

        <ReactAnimatedWeather
          icon={"PARTLY_CLOUDY_DAY"}
          color={"goldenrod"}
          size={50}
          animate={true}
        />
        <div>Fri</div>

        <ReactAnimatedWeather
          icon={"PARTLY_CLOUDY_DAY"}
          color={"goldenrod"}
          size={50}
          animate={true}
        />
      </div>
    </div>
  </StrictMode>
);
