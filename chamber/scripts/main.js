// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();

const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// long, medium, short options ... try them

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;



let date = new Date(document.lastModified);
let shortDate = date.toLocaleDateString('en-US');
let hours = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
let fullDate = `${shortDate} ${hours}:${min}:${sec}`
document.getElementById("modified").innerHTML = fullDate;

let currentDate = new Date()
let currentYear = currentDate.getFullYear()
document.querySelector('#year').innerHTML = currentYear;

function toggleMenu() {
	document.getElementById('primaryNav').classlist.toggle('open');
	document.getElementById('hamburgerBtn').classlist.toggle('open');
}
const x = document.getElementById('hamburgerBtn')

x.onclick = toggleMenu;