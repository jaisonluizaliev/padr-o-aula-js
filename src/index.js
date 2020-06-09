import Planet from "./planet"
import semNome from "./planet_operations"

//const Planet = require('./planet')
//const planetOperations = require('./planet_operations')

let planets = [
    new Planet("Mercúrio", 0.39),
    new Planet("Vênus", 0.72),
    new Planet("Terra", 1),
    new Planet("Marte", 1.52),
    new Planet("Júpiter", 5.2),
    new Planet("Saturno", 9.53),
    new Planet("Urano", 19.1),
    new Planet("Netuno", 30)
]

planets.forEach(planet => {
    let distanceFromSun = semNome.convertAUtoKm(planet.auToSum).toFixed(2)
    alert(`${planet.name} - ${planet.auToSum}AU - ${distanceFromSun}km`)
})

