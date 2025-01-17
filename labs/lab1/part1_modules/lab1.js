//Include Lodash
const _ = require('lodash'); 

//Creation of list of holidays (Question 1 )
//Need name and date property for loop
const holidays = [
    { name: "Christmas", date: "2025-12-25" },
    { name: "Canada Day", date: "2025-07-01" },
    { name: "New Year", date: "2026-01-01" },
    { name: "Thanksgiving", date: "2025-11-27"},
    { name: "Halloween", date: "2025-10-31"}
  ];

//Set variable Today to accurate current date
const today = new Date();
//Loop for each holiday (5 times)
holidays.forEach(holiday => {
//Calculate how many days till holiday holiday date - current date divide by MS to get days
console.log(`${holiday.name} is in ${Math.ceil((new Date(holiday.date) - today) / 86400000)} days.`);

//Choses one of the created holidays and lists the date (Question 3)
const randomHoliday = _.sample(holidays);
console.log(`Random holiday: ${randomHoliday.name} is on ${randomHoliday.date}.`);
 

// Find index position of Christmas (Question 4)
const christmasIndex = _.findIndex(holidays, { name: "Christmas" });
console.log(`Index of Christmas: ${christmasIndex}`);

// Find index position of Canada Day (Question 4)
const canadaDayIndex = _.findIndex(holidays, { name: "Canada Day" });
console.log(`Index of Canada Day: ${canadaDayIndex}`);
});
    