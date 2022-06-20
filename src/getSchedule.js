const data = require('../data/zoo_data');

const { species, hours } = require('../data/zoo_data');

function getNewSchedule(keys, values) {
  const result = {};
  keys.forEach((day, index) => {
    if (day === 'Monday') {
      result[day] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    } else {
      result[day] = {
        officeHour: `Open from ${values[index].open}am until ${values[index].close}pm`,
        exhibition: species.filter((specie) =>
          specie.availability.includes(day)).map((animal) => animal.name),
      };
    }
  });
  return result;
}

function scheduleFor(target, schedule, animals, days) {
  if (animals.includes(target)) {
    const availability = species.map((specie) => specie.availability);
    return availability[animals.indexOf(target)];
  }
  if (days.includes(target)) {
    const result = {};
    result[target] = schedule[target];
    return result;
  }
}

function getSchedule(scheduleTarget) {
  const days = Object.keys(hours);
  const hoursValues = Object.values(hours);
  const animals = species.map((specie) => specie.name);
  const schedule = getNewSchedule(days, hoursValues);
  if (scheduleTarget === undefined || (!animals.includes(scheduleTarget)
  && !days.includes(scheduleTarget))) {
    return schedule;
  }
  return scheduleFor(scheduleTarget, schedule, animals, days);
}

module.exports = getSchedule;
