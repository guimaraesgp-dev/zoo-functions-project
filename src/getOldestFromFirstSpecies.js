const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  const biggerAge = (animais) => animais.reduce((age, animal) =>
    (animal.age > age ? animal.age : age), 0);
  const especie = employees.find((person) => person.id.includes(id)).responsibleFor[0];
  const animais = species.find((specie) => specie.id.includes(especie)).residents;

  return Object.values(animais.find((animal) => animal.age === biggerAge(animais)));
}

module.exports = getOldestFromFirstSpecies;
