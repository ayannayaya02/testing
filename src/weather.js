import React from "react";

export default function searchEngine(props) {
  function showTemperature(event) {
    event.preventDefault();
    let temperature = (props.temperature * 9) / 5 + 32;
  }
  function showCity(event) {
    event.preventDefault();
    let city = event.target.value;
  }
  return (
    <form onSubmit={showTemperature}>
      <input type="search" onChange={showCity} />
      <input type="submit" value="Search" />
    </form>
  );
}
