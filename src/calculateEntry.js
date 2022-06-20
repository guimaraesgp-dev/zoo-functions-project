const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const child = entrants.filter(({ age }) => age < 18).length;
  const adult = entrants.filter(({ age }) => age >= 18 && age < 50).length;
  const senior = entrants.filter(({ age }) => age >= 50).length;
  return { adult, child, senior };
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const entrantsByAge = countEntrants(entrants);
  return Object.keys(entrantsByAge).reduce((acc, curr) => acc + (entrantsByAge[curr] * prices[curr]), 0);
}

module.exports = { calculateEntry, countEntrants };
