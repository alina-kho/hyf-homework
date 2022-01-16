const activities = []; // the best option here is an array of objects

function addActivity(date, activity, duration) {
  const activityAdded = {
    date: date,
    activity: activity,
    duration: duration,
  };
  activities.push(activityAdded);
  console.log(activities);
}

//Tests
addActivity("23/7-18", "Youtube", 30);
addActivity("23/7-18", "Instagram", 30);

//Show status - modified
// There are two ways a limit can be inserted:
// 1. Limit as a boolean, but in this case we have to either assign some fixed limit or make it user-friendly through an optional parameter of limit minutes
// 2. Limit as an integer where 0 is no limit.
//I have chosen the first one:
function showStatus(arr, limit, limitMins) {
  let totalDuration = 0;
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      totalDuration += arr[i].duration;
    }
    console.log(
      `You have added ${arr.length} activities. They amount to ${totalDuration} min. of usage`
    );
    if (limit === true && totalDuration >= limitMins) {
      console.log("You have reached your limit, no more smartphoning for you!");
    }
  } else {
    console.log("Add some activities before calling showStatus");
  }
}
//Test
//showStatus(activities, false); // works
//showStatus(activities, true, 60); // works
showStatus(activities, true, 90); // works

//Extra feature - daily status
// The app can be even cooler if we could choose a certain date and get the status for it
function getDailyStatus(chosenDate, limitFortheDay, dailyLimitMins) {
  let dailyActivity = [];
  let totalDailyActivity = 0; //daily activity in mins
  for (let i = 0; i < activities.length; i++) {
    if (activities[i].date === chosenDate) {
      dailyActivity.push(activities[i]); // pushing it to the array
      totalDailyActivity += activities[i].duration; //counting the duration right away
    } else {
      continue;
    }
  }
  if (limitFortheDay == true && totalDailyActivity > dailyLimitMins) {
    console.log(
      `Aw, you have exceeded your screen time for ${chosenDate}! You activity log is presented below.`
    );
    console.log(dailyActivity);
  } else if (
    limitFortheDay == true &&
    (dailyLimitMins == 0 || dailyLimitMins == undefined)
  ) {
    console.log("Please enter the limit minutes");
  } else if (
    limitFortheDay == false ||
    (limitFortheDay == true && totalDailyActivity < dailyLimitMins)
  ) {
    console.log(
      `You smartphone usage on ${chosenDate} is ${totalDailyActivity} mins. You activity log is presented below.`
    );
    console.log(dailyActivity);
  }
}

//Tests

//Adding some more data
addActivity("24/7-18", "Youtube", 30);
addActivity("24/7-18", "Instagram", 30);
addActivity("24/7-18", "Snapchat", 30);

getDailyStatus("24/7-18", true); //works
getDailyStatus("24/7-18", true, 80); //works
getDailyStatus("24/7-18", true, 120); //works
getDailyStatus("24/7-18", false); //works
