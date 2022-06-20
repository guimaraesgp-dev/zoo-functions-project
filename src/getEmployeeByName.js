const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const verifyEmployee = employees.find((employee) =>
    (employeeName === employee.firstName || employeeName === employee.lastName));
  return verifyEmployee;
}

module.exports = getEmployeeByName;
