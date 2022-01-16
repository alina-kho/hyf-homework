const seriesDurations = [
  {
    title: "How I met your mother",
    days: 3,
    hours: 4,
    minutes: 16,
  },
  {
    title: "Two and a Half Men",
    days: 5,
    hours: 11,
    minutes: 0,
  },
  {
    title: "Silicon Valley",
    days: 1,
    hours: 0,
    minutes: 44,
  },
];

function getSeriesDuration(seriesDurations) {
  let lifeInHours = (366 * 20 + 365 * 60) * 24; //leap years and ordinary ones
  let total = 0;
  for (let i = 0; i < seriesDurations.length; i++) {
    let durationInHours =
      seriesDurations[i].days * 24 +
      seriesDurations[i].hours +
      seriesDurations[i].minutes / 60;
    let durationInProcent = (durationInHours / lifeInHours) * 100;
    console.log(
      `${seriesDurations[i].title} took ${durationInProcent.toFixed(3)} of my life`
    );
    total += durationInProcent;
  }
  console.log(total);
  console.log(`In total that is ${total.toFixed(3)}% of my life`);
}

getSeriesDuration(seriesDurations);
