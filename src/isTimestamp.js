import isNumber from "./isNumber.js";

export default function isTimestamp(ts) {
  if (!isNumber(ts)) return false;
  
  const unixTime = new Date(ts * 1000);
  
  return !Number.isNaN(unixTime.getTime()) && unixTime.getTime() === ts * 1000;
}