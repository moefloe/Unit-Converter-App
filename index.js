// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

let inputEl = document.getElementById("input-el")
const mField = document.getElementById("m-field")
const ftField = document.getElementById("ft-field")
const lField = document.getElementById("l-field")
const galField = document.getElementById("gal-field")
const kgField = document.getElementById("kg-field")
const lbField = document.getElementById("lb-field")
const convertBtn = document.getElementById("convert-btn")
const colDividers = document.querySelectorAll(".col-divider")

inputEl.value = 1

convertBtn.addEventListener('click', function () {

    // The event listener first checks that the user is entering a number type

    if (isNaN(Number(inputEl.value))) {
        alert('Please enter a valid number!')
    }
    else if (((Number(inputEl.value) <= 0))) {
        alert('Please enter a number greater than 0!')
    }
    else {
        render()
    }
})

// Setting the conversions for the different units

function meterToFeet() {
    return parseFloat(inputEl.value * 3.281).toFixed(3)
}

function feetToMeter() {
    return parseFloat(inputEl.value / 3.281).toFixed(3)
}

function literToGallon() {
    return parseFloat(inputEl.value * 0.264).toFixed(3)
}

function gallonToLiter() {
    return parseFloat(inputEl.value / 0.264).toFixed(3)
}

function kilogramToPound() {
    return parseFloat(inputEl.value * 2.204).toFixed(3)
}

function poundToKilogram() {
    return parseFloat(inputEl.value / 2.204).toFixed(3)
}

// Function to load the page and display our results

function render() {
    mField.innerHTML = `<p> ${inputEl.value} meters = ${meterToFeet()} feet</p>`
    ftField.innerHTML = `<p> ${inputEl.value} feet = ${feetToMeter()} meters`
    lField.innerHTML = `<p> ${inputEl.value} liters = ${literToGallon()} gallons</p>`
    galField.innerHTML = `<p> ${inputEl.value} gallons = ${gallonToLiter()} liters</p>`
    kgField.innerHTML = `<p> ${inputEl.value} kilos = ${kilogramToPound()} pounds</p>`
    lbField.innerHTML = `<p> ${inputEl.value} pounds = ${poundToKilogram()} kilos</p>`

}
render()

// Function to add our col dividers 

for (let i = 0; i < colDividers.length; i++) {
    colDividers[i].classList.add('display')
}


