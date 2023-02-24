// Display date on top
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.
// derive the current date using a date object
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// long, medium, short options ... try them
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

//Display date on the footer
const date = new Date(document.lastModified);
const shortDate = date.toLocaleDateString('en-US');
const hours = date.getHours();
const min = date.getMinutes();
const sec = date.getSeconds();
const fullDate = `${shortDate} ${hours}:${min}:${sec}`
document.getElementById("modified").innerHTML = fullDate;

//Display year
const currentDate = new Date()
const currentYear = currentDate.getFullYear()
document.querySelector('#year').innerHTML = currentYear;

//Announcement on Mondays and Tuesdays
const announcement = document.querySelector('#announcement');
const today = new Date();
if(today.getDay() == 1 || today.getDay() == 2) {
	announcement.style.display = 'block';
}

//Hamburger
function toggleMenu() {
	document.getElementById('primaryNav').classList.toggle('open');
	document.getElementById('hamburgerBtn').classList.toggle('open');
}
const x = document.getElementById('hamburgerBtn');

x.onclick = toggleMenu;

// Hidden element on Join Page
document.querySelector('#dateTime').value = today;