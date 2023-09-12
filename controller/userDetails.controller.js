const { join } = require("path");

const userDetails = (req, res) => {
  function getUtcTimeString() {
    const now = new Date();
    const year = now.getUTCFullYear();
    const month = String(now.getUTCMonth() + 1).padStart(2, '0'); // Month is zero-based, so add 1 and pad with '0' if necessary
    const day = String(now.getUTCDate()).padStart(2, '0');
    const hours = String(now.getUTCHours()).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');
  
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
  }

  const utcTimeString = getUtcTimeString();
  console.log("Current UTC Time:", currentUTCTime);
    let day = new Date().getDay();
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return res.status(200).json({
      slack_name: `${req.query.slack_name}`,
      current_day: `${daysOfWeek[day]}`,
      utc_time: `${utcTimeString}`,
      track: `${req.query.track}`,
      github_file_url: "https://github.com/NICKY-TECH/stageOne_HNG/blob/master/server.js",
      github_repo_url: "https://github.com/NICKY-TECH/stageOne_HNG",
      status_code: "200",
    });
};

module.exports = {
  userDetails,
};
