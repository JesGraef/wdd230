// select the elements to manipulate (output to)
// const datefield = document.querySelector(".date");
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();

const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// long, medium, short options ... try them

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

const date = new Date(document.lastModified);
const shortDate = date.toLocaleDateString('en-US');
const hours = date.getHours();
const min = date.getMinutes();
const sec = date.getSeconds();
const fullDate = `${shortDate} ${hours}:${min}:${sec}`
document.getElementById("modified").innerHTML = fullDate;

const currentDate = new Date()
const currentYear = currentDate.getFullYear()
document.querySelector('#year').innerHTML = currentYear;

const announcement = document.querySelector('#announcement');
const today = new Date();
if(today.getDay() == 1 || today.getDay() == 2) {
	announcement.style.display = 'block';
}

function toggleMenu() {
	document.getElementById('primaryNav').classList.toggle('open');
	document.getElementById('hamburgerBtn').classList.toggle('open');
}
const x = document.getElementById('hamburgerBtn');

x.onclick = toggleMenu;

