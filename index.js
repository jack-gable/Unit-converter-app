/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const lengthNum = document.getElementById("length-num")
const volumeNum = document.getElementById("volume-num")
const massNum = document.getElementById("mass-num")

function convertLength() {
    let metersToFeet = inputEl.value * 3.281
    let feetToMeters = inputEl.value / 3.281
    let lengthValue = `
        ${inputEl.value} meters = ${metersToFeet.toFixed(3)} feet | ${inputEl.value} feet = ${feetToMeters.toFixed(3)} meters
    `
    return lengthValue
}

function convertVolume() {
    let litersToGallons = inputEl.value * 0.264
    let gallonsToLiters = inputEl.value / 0.264
    let volumeValue = `
        ${inputEl.value} liters = ${litersToGallons.toFixed(3)} gallons | ${inputEl.value} gallons = ${gallonsToLiters.toFixed(3)} liters
    `
    return volumeValue
}

function convertMass() {
    let kilogramsToPounds = inputEl.value * 2.204
    let poundsToKilograms = inputEl.value / 2.204
    let massValue = `
        ${inputEl.value} kilograms = ${kilogramsToPounds.toFixed(3)} pounds | ${inputEl.value} pounds = ${poundsToKilograms.toFixed(3)} kilograms
    `
    return massValue
}

inputBtn.addEventListener("click", function() {
    lengthNum.textContent = convertLength()
    volumeNum.textContent = convertVolume()
    massNum.textContent = convertMass()
})