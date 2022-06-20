const data = require('../data/zoo_data');

const { species, employees } = data;

const getSpecies = ({ responsibleFor }) => species
  .filter(({ id }) => responsibleFor.includes(id));
function getEmployee(employee) {
  const { name } = employee;
  return employees.find(({ firstName, lastName, id }) =>
    (name === firstName || name === lastName || employee.id === id));
}
function showInfo(employee) {
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: getSpecies(employee).map((specie) => specie.name),
    locations: getSpecies(employee).map((specie) => specie.location),
  };
}
function getEmployeesCoverage(employeeInfo) {
  if (!employeeInfo) return employees.map((employee) => showInfo(employee));
  const employee = getEmployee(employeeInfo);
  if (!employee) throw new Error('Informações inválidas');
  return showInfo(employee);
}
module.exports = getEmployeesCoverage;
