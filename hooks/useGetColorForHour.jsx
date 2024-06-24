function useGetColorForHour(hour, minute) {
  const intervals = [
    { start: "00:01", end: "01:00", color: "#FFFFFF" },
    { start: "01:01", end: "02:00", color: "#F9F9F9" },
    { start: "02:01", end: "03:00", color: "#F2F2F2" },
    { start: "03:01", end: "04:00", color: "#EBEBEB" },
    { start: "04:01", end: "05:00", color: "#E5E5E5" },
    { start: "05:01", end: "06:00", color: "#DEDEDE" },
    { start: "06:01", end: "07:00", color: "#D7D7D7" },
    { start: "07:01", end: "08:00", color: "#D0D0D0" },
    { start: "08:01", end: "09:00", color: "#C9C9C9" },
    { start: "09:01", end: "10:00", color: "#C3C3C3" },
    { start: "10:01", end: "11:00", color: "#BCBCBC" },
    { start: "11:01", end: "12:00", color: "#B5B5B5" },
    { start: "12:01", end: "13:00", color: "#AEAEAE" },
    { start: "13:01", end: "14:00", color: "#A8A8A8" },
    { start: "14:01", end: "15:00", color: "#A1A1A1" },
    { start: "15:01", end: "16:00", color: "#9A9A9A" },
    { start: "16:01", end: "17:00", color: "#939393" },
    { start: "17:01", end: "18:00", color: "#8C8C8C" },
    { start: "18:01", end: "19:00", color: "#858585" },
    { start: "19:01", end: "20:00", color: "#7E7E7E" },
    { start: "20:01", end: "21:00", color: "#787878" },
    { start: "21:01", end: "22:00", color: "#717171" },
    { start: "22:01", end: "23:00", color: "#6A6A6A" },
    { start: "23:01", end: "24:00", color: "#000000" },
  ];

  const currentTime = `${hour.toString().padStart(2, "0")}:${minute
    .toString()
    .padStart(2, "0")}`;

  for (const interval of intervals) {
    if (currentTime >= interval.start && currentTime <= interval.end) {
      return interval.color;
    }
  }

  return "#FFFFFF"; // defult color
}

export default useGetColorForHour;
