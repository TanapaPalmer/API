const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

//-------------------------------------------------------------------------------
//An array of pokémon objects where the id is evenly divisible by 3

console.log("An array of pokémon objects where the id is evenly divisible by 3")



const divisibleByThreePokémon = pokémon.filter(pokemon => pokemon.id % 3 === 0);
console.log(divisibleByThreePokémon);



console.log("---------------------------------------------")

//-------------------------------------------------------------------------------
//An array of pokémon objects that are "fire" type

console.log("An array of pokémon objects that are 'fire' type")



const fireTypes = pokémon.filter( pokemon => pokemon.types[0] === "fire" );
console.log(fireTypes);



console.log("---------------------------------------------")

//-------------------------------------------------------------------------------
//An array of pokémon objects that have more than one type

console.log("An array of pokémon objects that have more than one type")



const moreThanOneType = pokémon.filter(pokemon => pokemon.types.length > 1);
console.log(moreThanOneType);



console.log("---------------------------------------------")

//-------------------------------------------------------------------------------
//An array with just the names of the pokémon

console.log("//An array with just the names of the pokémon")



const pokemonName = pokémon.map( pokemon => pokemon.name);
console.log(pokemonName);



console.log("---------------------------------------------")

//-------------------------------------------------------------------------------
//An array with just the names of pokémon with an id greater than 99

console.log("An array with just the names of pokémon with an id greater than 99")



const pokemonNamesWithIdGreaterThan99 = pokémon
  .filter(pokemon => pokemon.id > 99)
  .map(pokemon => pokemon.name);
console.log(pokemonNamesWithIdGreaterThan99);



console.log("---------------------------------------------")

//-------------------------------------------------------------------------------
//An array with just the names of the pokémon whose only type is poison

console.log("An array with just the names of the pokémon whose only type is poison")



const pokemonWhoseHasPoisonType = pokémon
  .filter(pokemon => pokemon.types[0] === "poison")
  .map(pokemon => pokemon.name);
console.log(pokemonWhoseHasPoisonType);



console.log("---------------------------------------------")

//-------------------------------------------------------------------------------
//An array containing just the first type of all the pokémon whose second type is "flying"

console.log("An array containing just the first type of all the pokémon whose second type is 'flying'")



const firstTypeOfAllWhoseSecondTypeIsFlying = pokémon
  .filter(pokemon => pokemon.types.length > 1 && pokemon.types[1] === "flying")
  .map(pokemon => pokemon.types[0]);
console.log(firstTypeOfAllWhoseSecondTypeIsFlying)



console.log("---------------------------------------------")

//-------------------------------------------------------------------------------