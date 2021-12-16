function getEventWeekday(days) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let d = new Date().getDay(); //today's index
  let eventIndex = (days % 7) + d; // the remainder = how far the event's week day from today's weekday (if we consider just a week) E.g. remainder = 0 - the event is on the same weekday as today's
  var eventDay; // introducing a variable for a further use in an if-statement
  if (eventIndex >= 7) {
    eventDay = daysOfWeek[eventIndex % 7]; // the array has indexes only from 0 to 6 - sometimes the eventIndex is higher, so we need to get a remainder once again but it's already a sum of indexes
  } else {
    eventDay = daysOfWeek[eventIndex];
  }
  return eventDay;
}

//Tests
console.log(getEventWeekday(27));
console.log(getEventWeekday(658));
console.log(getEventWeekday(4));
console.log(getEventWeekday(3086));
