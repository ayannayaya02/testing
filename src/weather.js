import React, { useState } from "react";

export default function SearchEngine(props) {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState(props.temperature);

  function handleSubmit(event) {
    event.preventDefault();
    temperature((props.temperature * 9) / 5 + 32);
    setTemperature(props.temperature);
    setCity(event.target.value);
  }
  function cityName(event) {
    event.preventDefault();
    city(event.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={cityName} />
      <input type="submit" value="Search" />
    </form>
  );
}
