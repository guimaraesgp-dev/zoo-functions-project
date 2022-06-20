const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (animal === undefined) {
    const totalOfSpecies = species.reduce((acc, specie) => {
      acc[specie.name] = specie.residents.length;
      return acc;
    }, {});
    return totalOfSpecies;
  }
  if (animal.sex === undefined) {
    const specieParameter = species.filter((specie) => specie.name === animal.specie);
    const count = specieParameter.reduce((acc, specie) => acc + specie.residents.length, 0);
    return count;
  }
  const specieParameter = species.find((specie) => specie.name === animal.specie);
  const sexParameter = specieParameter.residents.filter(({ sex }) => sex === animal.sex);
  return sexParameter.length;
}

module.exports = countAnimals;
