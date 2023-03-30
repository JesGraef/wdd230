// Drink Submissions
const submissionsDisplay = document.querySelector(".submissions");
let numsubmissions = Number(localStorage.getItem("submission"));
submissionsDisplay.textContent = numsubmissions;
