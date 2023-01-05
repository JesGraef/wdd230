let date = new Date(document.lastModified);
let shortDate = date.toLocaleDateString('en-US');
let hours = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
let fullDate = `${shortDate} ${hours}:${min}:${sec}`
document.getElementById("modified").innerHTML = fullDate;


let currentDate = new Date()
let currentYear = currentDate.getFullYear()
document.getElementById('year').innerHTML = currentYear;