const { join } = require("path");

const { userDetailsValidation } = require(join(
  __dirname,
  "..",
  "utils",
  "validate"
));

const userDetails = (req, res) => {
  function getCurrentUTCTime() {
    const now = new Date();
    const minutes = now.getUTCMinutes();
    const adjustedMinutes = Math.floor(Math.random() * 5) - 2; // Generate a random +/-2 minute adjustment
    now.setUTCMinutes(minutes + adjustedMinutes);

    const formattedTime = now.toISOString();

    return formattedTime;
  }

  const currentUTCTime = getCurrentUTCTime();
  console.log("Current UTC Time:", currentUTCTime);
  if (!error) {
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
      success: true,
      message: "Validation process successful",
      data: {
        slack_name: `${req.query.slack_name}`,
        current_day: `${daysOfWeek[day]}`,
        utc_time: `${currentUTCTime}`,
        track: `${req.query.track}`,
        github_file_url:"",
        github_repo_url: "",
        status_code: "200",
      },
    });
  }
  return res.status(400).json({
    success: false,
    message: "Validation error",
    data: { error },
  });
};

module.exports = {
  userDetails,
};