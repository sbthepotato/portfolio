// automatically updates the age in the background section
var agespan = document.getElementById('age');

// gets the current date and subtracts with dob to get an age.
dob = new Date(1997, 12, 13);
var today = new Date();
var age = Math.floor((today - dob) / (365.25 * 24 * 60 * 60 * 1000));

agespan.textContent = age;

// functions to hide and show the homelab section and scroll down to it or back from it
var projectsSection = document.getElementById('projects');
var homelabSection = document.getElementById('homelab');

function showHomeLab() {
    homelabSection.style.display = 'flex'
    homelabSection.scrollIntoView()
}

function hideHomeLab() {
    homelabSection.style.display = 'none'
    projectsSection.scrollIntoView()
}


console.log('hello world :]');