export const  formatDate=(dateString)=> {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1; // Adding 1 because January is 0
  const year = date.getFullYear();

  // Pad single digit day or month with a leading zero
  const formattedDay = day < 10 ? "0" + day : day;
  const formattedMonth = month < 10 ? "0" + month : month;

  return formattedDay + "/" + formattedMonth + "/" + year;
}

// const isoDateString = "2013-12-22T18:40:27Z";
// const formattedDate = formatDate(isoDateString);
// console.log(formattedDate); // Output: 22/12/2013
