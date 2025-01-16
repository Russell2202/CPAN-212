//Include Lodash
const _ = require('lodash'); 

//Creation of list of holidays
//Need name and date property for loop
const holidays = [
    { name: "Christmas", date: "2025-12-25" },
    { name: "Canada Day", date: "2025-07-01" },
    { name: "New Year", date: "2026-01-01" },
    { name: "Thanksgiving", date: "2025-11-27"},
    { name: "Halloween", date: "2025-10-31"}
  ];

  const randomHoliday = _.sample(holidays);
  console.log(`Random holiday: ${randomHoliday.name} is on ${randomHoliday.date}.`);
 

  // Find index of Christmas
const christmasIndex = _.findIndex(holidays, { name: "Christmas" });

// Find index of Canada Day
const canadaDayIndex = _.findIndex(holidays, { name: "Canada Day" });

console.log(`Index of Christmas: ${christmasIndex}`);
console.log(`Index of Canada Day: ${canadaDayIndex}`);

  //Set variable Today to accurate current date
  const today = new Date();
  //Loop for each holiday (5 times)
  holidays.forEach(holiday => {
  //Calculate how many days till holiday holiday date - current date 
  // div by MS to get days
    console.log(`${holiday.name} is in ${Math.ceil((new Date(holiday.date) - today) / 86400000)} days.`);
  });
    