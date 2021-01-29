//declaring const axios to include in file
const axios = require('axios');
//fetching API info will be pulled from
axios('https://pokeapi.co/api/v2/pokemon/seel')
//if link works then .then will run
    .then(function (response) {
        //declaring const pokemon and setting it equal to API data
        const pokemon = response.data;
        //logging the pokemons name and id inside the console
        console.log("This is a " + pokemon.name + " and its ID is " + pokemon.id);
    })
    //if the link does not work the .catch will run for errors
    .catch(function (error) {
        //logging errors in the console
        console.log("Error: " + error);
    });