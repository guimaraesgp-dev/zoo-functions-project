const data = require('../data/zoo_data');

function getEmployeesCoverage() {
  const { species, employees } = data;

const defaultt = { id: '', fullName: '', species: [], locations: [] };

const funcionarios = employees.reduce((acc, employer) => {
  acc.push(employer.firstName);
  return acc;
}, []);

const findSpecies = (animais) => animais.reduce((acc, animal) => {
  acc.push((species.find((esp) => esp.id === animal)).name);
  return acc;
}, []);

const findlocations = (animais) => animais.reduce((acc, animal) => {
  acc.push((species.find((esp) => esp.id === animal)).location);
  return acc;
}, []);

const getData = (funcionario, name) => funcionario.reduce((acc, employer) => {
  const objeto = { ...defaultt };
  objeto.id = employer.id;
  objeto.fullName = `${employer.firstName} ${employer.lastName}`;
  objeto.species = findSpecies(employer.responsibleFor);
  objeto.locations = findlocations(employer.responsibleFor);
  acc.push(objeto);
  return name ? objeto : acc;
}, []);

function getEmployeesCoverage(name) {
  let funcionario;
  if (name) {
    funcionario = employees.filter((employer) => employer.firstName === name.name
    || employer.id === name.id || employer.lastName === name.name);
  } else {
    funcionario = employees.filter((employer) => funcionarios.find((funci) => employer.firstName === funci));
  }
  if (!funcionario) {
    throw new Error('Informações inválidas');
  }
  return getData(funcionario, name);
}

}
module.exports = getEmployeesCoverage;
