const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertButton = document.getElementById("convertBtn");
const result = document.getElementById("result");

convertButton.addEventListener("click", function () {

    const temperature = Number(temperatureInput.value);
    const unit = unitSelect.value;

    // Empty or invalid input
    if (temperatureInput.value.trim() === "" || isNaN(temperature)) {
        result.textContent = "Please enter a valid temperature.";
        return;
    }

    // Absolute zero validation
    if (unit === "celsius" && temperature < -273.15) {
        result.textContent = "Temperature cannot be below absolute zero.";
        return;
    }

    if (unit === "fahrenheit" && temperature < -459.67) {
        result.textContent = "Temperature cannot be below absolute zero.";
        return;
    }

    if (unit === "kelvin" && temperature < 0) {
        result.textContent = "Kelvin temperature cannot be below 0 K.";
        return;
    }

    let celsius;
    let fahrenheit;
    let kelvin;

    // Celsius
    if (unit === "celsius") {

        celsius = temperature;
        fahrenheit = (celsius * 9 / 5) + 32;
        kelvin = celsius + 273.15;

    }

    // Fahrenheit
    else if (unit === "fahrenheit") {

        fahrenheit = temperature;
        celsius = (fahrenheit - 32) * 5 / 9;
        kelvin = celsius + 273.15;

    }

    // Kelvin
    else if (unit === "kelvin") {

        kelvin = temperature;
        celsius = kelvin - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;

    }

    result.innerHTML =
        `${celsius.toFixed(2)} °C = 
        ${fahrenheit.toFixed(2)} °F = 
        ${kelvin.toFixed(2)} K`;
});