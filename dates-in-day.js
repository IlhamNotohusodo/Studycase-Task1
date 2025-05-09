//  a code to get difference between dates in days
let date1 = new Date("2024-03-19");
let date2 = new Date("2024-03-21");
let differenceInTime = date2 - date1;
let differenceInDays = differenceInTime / (1000 * 3600 * 24);
console.log("Selisih hari:", differenceInDays); // Output: 2
