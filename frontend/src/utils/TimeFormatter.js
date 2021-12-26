export const formatTime = date => {
  let options = {
    hour: "2-digit", minute: "2-digit",
    // weekday: "short",
    year: "2-digit", month: "numeric", day: "numeric",
  };

  return date.toLocaleTimeString("en-us", options);
};
