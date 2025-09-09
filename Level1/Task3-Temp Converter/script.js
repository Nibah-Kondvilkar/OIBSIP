function convertTemperature() {
    const tempInput = parseFloat(document.getElementById("tempInput").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    const resultElement = document.getElementById("result");


    if (isNaN(tempInput)) {
        resultElement.textContent = "Please enter a valid number!";
        return;
    }
 
    let tempInCelsius;
    switch (fromUnit) {
        case "celsius":
            tempInCelsius = tempInput;
            break;
        case "fahrenheit":
            tempInCelsius = (tempInput - 32) * 5 / 9;
            break;
        case "kelvin":
            tempInCelsius = tempInput - 273.15;
            break;
    }

    let finalTemp;
    let unitSymbol = "";

    switch (toUnit) {
        case "celsius":
            finalTemp = tempInCelsius;
            unitSymbol = "°C";
            break;
        case "fahrenheit":
            finalTemp = (tempInCelsius * 9 / 5) + 32;
            unitSymbol = "°F";
            break;
        case "kelvin":
            finalTemp = tempInCelsius + 273.15;
            unitSymbol = "K";
            break;
    }

    resultElement.textContent = `Result: ${finalTemp.toFixed(2)} ${unitSymbol}`;
}
