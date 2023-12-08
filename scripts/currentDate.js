const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
let dateElement = document.querySelector('.dateElement');
dateElement.innerHTML= `Effective Date: ${month}/${day}/${year}.`