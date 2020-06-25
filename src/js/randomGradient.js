const _ = require('underscore')
const $ = require('jquery')

console.log("Fetching...")
$.getJSON("https://raw.githubusercontent.com/ghosh/uiGradients/master/gradients.json", (data) => {
    console.log("Fetched.")
    console.log("Sampling...")
    var randomGradient = _.sample(data)
    console.log("Sampled.")
    console.log("Getting only the colors...")
    var randomGradientColors = randomGradient.colors
    console.log("Appending...")
    $('head').append(`<style> background: ${randomGradientColors[0]}; background: -webkit-linear-gradient(to right, ${randomGradientColors[0]}, ${randomGradientColors[1]}); </style>`)
    console.log("Done.")
})