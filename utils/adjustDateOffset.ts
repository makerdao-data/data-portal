export default function adjustForTimezone(date: Date): Date {
  const timeOffsetInMS: number = date.getTimezoneOffset() * 60000;
  date.setTime(date.getTime() + timeOffsetInMS);

  return date;
}
