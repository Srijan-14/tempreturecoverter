let celsiusConverter = document.getElementById("celsius");
let fahrenheitConverter = document.getElementById("fahrenheits");
let kelvinConverter = document.getElementById("kelvins");


function celsiusCon() {
    let celToFar = (parseFloat(celsiusConverter.value) * 9 / 5) + 32;
    let celToKel = (parseFloat(celsiusConverter.value)) + 273.15;
    fahrenheitConverter.value = parseFloat(celToFar.toFixed(2));
    kelvinConverter.value = parseFloat(celToKel.toFixed(2));
}

function fahrenheitCon() {
    let farToCel = (parseFloat(fahrenheitConverter.value) - 32) * (5 / 9);
    let farToKel = (parseFloat(fahrenheitConverter.value) - 32) * (5 / 9) + 273.15;
    celsiusConverter.value = parseFloat(farToCel.toFixed(2));
    kelvinConverter.value = parseFloat(farToKel.toFixed(2));
}

function kelvinCon() {
    let kelToCel = (parseFloat(kelvinConverter.value)) - 273.15;
    let kelToFar = (parseFloat(kelvinConverter.value) - 273.15) * (9 / 5) + 32;
    celsiusConverter.value = parseFloat(kelToCel.toFixed(2));
    fahrenheitConverter.value = parseFloat(kelToFar.toFixed(2));
}