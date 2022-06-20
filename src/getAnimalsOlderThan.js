const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) 
  const { species } = data;

  function getAnimalsOlderThan(animal, animalAge) {
    return species.find(({ name }) => name === animal)
      .residents.every(({ age }) => age >= animalAge);
}

module.exports = getAnimalsOlderThan;
