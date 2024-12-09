
// Implement getting current time as UTC string and optionally local time zone
// Returning time value(s) as a JSON formatted string, but we could implement a model object if this was more complex data.
exports.getTime = (timezone: string) : string => {
  const currentTime : Date = new Date();
  const currentTimeString: string = currentTime.toISOString();

  if (timezone)
  {
    // Have a timezone value
    const adjustedTimeString : string = currentTime.toLocaleString('en-US', {
        timeZone: timezone || 'UTC',
          });

    return '{ currentTime: ${currentTimeString}, adjustedTime: ${adjustedTimeString} }';
  }
  else
  {
    // No timezone parameter so return just UTC time
    return '{ currentTime: ${currentTimeString} }';
  }
}
