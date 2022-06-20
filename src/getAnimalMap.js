const data = require('../data/zoo_data');

const { species } = require('../data/zoo_data');

function getAnimalMap(options) {
  if (options === undefined) {
    const object = {};
    species.forEach((specie) => {
      object[specie.name] = specie.residents.length;
    });
    return object;
  }
  if (typeof parameters === 'object') {
    if (options.sex === undefined) {
      return species.find((specie) => specie.name === options.specie).residents.length;
    }
    return species.find((specie) => specie.name === options.specie)
      .residents.filter((resident) => resident.sex === options.sex).length;
  }
}


module.exports = getAnimalMap;
