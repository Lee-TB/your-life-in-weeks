export function calculateNumberOfWeeks(startDate, endDate) {
  // Convert input strings to Date objects
  const startDateObj = new Date(startDate);
  const endDateObj = new Date(endDate);

  // Check if startDate is greater than endDate
  if (startDateObj > endDateObj) {
    throw new Error("Start date cannot be greater than end date");
  }

  // Calculate the difference in milliseconds
  const timeDifference = endDateObj - startDateObj;

  // Calculate the number of milliseconds in a week
  const millisecondsInWeek = 7 * 24 * 60 * 60 * 1000;

  // Calculate the number of weeks
  const numberOfWeeks = Math.floor(timeDifference / millisecondsInWeek);

  return numberOfWeeks;
}
