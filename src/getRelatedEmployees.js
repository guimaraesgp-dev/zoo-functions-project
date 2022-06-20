const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const gerets = employees.filter(({ managers }) => managers.includes(managerId));
    return gerets.map((worker) => `${worker.firstName} ${worker.lastName}`);
  }
  throw Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
