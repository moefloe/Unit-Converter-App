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

convertBtn.addEventListener("click", function () {
    // First, making sure we grab the value that the user entered and that it is a number

    let inputElValue = parseFloat((inputEl).value)

    // Now doing the conversion calculations and rounding them to 3 decimal places

    let meterConvert = (inputElValue * 3.281).toFixed(3)
    mField.innerHTML = `<p> ${inputElValue} meters = ${meterConvert} feet</p>`

    let ftConvert = (inputElValue / 3.281).toFixed(3)
    ftField.innerHTML = `<p> ${inputElValue} feet = ${ftConvert} meters`

    let literConvert = (inputElValue * 0.264).toFixed(3)
    lField.innerHTML = `<p> ${inputElValue} liters = ${literConvert} gallons</p>`

    let galConvert = (inputElValue / 0.264).toFixed(3)
    galField.innerHTML = `<p> ${inputElValue} gallons = ${galConvert} liters</p>`

    let kgConvert = (inputElValue * 2.204).toFixed(3)
    kgField.innerHTML = `<p> ${inputElValue} kilograms = ${kgConvert} pounds</p>`

    let lbConvert = (inputElValue / 2.204).toFixed(3)
    lbField.innerHTML = `<p> ${inputElValue} kilograms = ${lbConvert} pounds</p>`

    // Adding the col-dividers to my output display

    for (let i = 0; i < colDividers.length; i++)
        colDividers[i].classList.add("display")
})
