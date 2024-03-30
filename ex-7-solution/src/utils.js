export const shiftMonth = (date, count) => {
  new Date(date).setMonth(date.getMonth + count)
}

export const daysFromNow = (n) => {
  let date = new Date();
  date.setDate(date.getDate() + n);
  return date;
}