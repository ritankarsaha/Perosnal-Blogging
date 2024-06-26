export const formatDate = (d: Date): string => {
  let str = d.toDateString();
  let [_, mon, day, yr] = str.split(" ");
  let dayFormatted = parseInt(day).toString();

  return `${mon} ${dayFormatted}, ${yr}`
}
