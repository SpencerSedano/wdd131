const gettingYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const date = new Date();

yearVar = date.getFullYear();

gettingYear.innerHTML = "© " + yearVar;

// Starting Last Modified Object

let lastModification = new Date(document.lastModified);
lastModified.innerHTML = lastModification;

// WindChill
function calculateWindChill(temperature, windSpeed, isMetric) {
  if (
    (isMetric && temperature <= 10 && windSpeed > 4.8) ||
    (!isMetric && temperature <= 50 && windSpeed > 3)
  ) {
    return isMetric
      ? (
          13.12 +
          0.6215 * temperature -
          11.37 * Math.pow(windSpeed, 0.16) +
          0.3965 * temperature * Math.pow(windSpeed, 0.16)
        ).toFixed(2) + " °C"
      : (
          35.74 +
          0.6215 * temperature -
          35.75 * Math.pow(windSpeed, 0.16) +
          0.4275 * temperature * Math.pow(windSpeed, 0.16)
        ).toFixed(2) + " °F";
  } else {
    return "N/A";
  }
}
