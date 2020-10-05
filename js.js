// array  declaration
let weekDays = ['monday','tuesday','wednesday','thursday','friday','sartuday','sunday'];
let akanMaleNames =['kwadwo','kwabena','kwaku','yaw','kofi','kwame','kwasi'];
let akanFemaleNames =['adwoa','abenaa','akua','yaa','afua','ama','akosua'];
// end of the array 
// user inputs
let date =parseInt(document.getElementById('enter date').value));
let month = parseInt(prompt(document.getElementById('month').value));
let year = parseInt(prompt(document.getElementById('year').value));
let gender = parseInt(prompt(document.getElementById('gender').value));
// end of user inputs

let dayWeek = new Date(month + "/" + date+ "/" + day);
var d = dayWaek.getDay();
var name = "";
if (gender === "male") {
 name = male[d];
}
else {
 name = female[d];
}
//concat the day born and the Akan name
alert("You were born on " + dateWeek[d] + " and your Akan name is " + name);
document.getElementById('akan').innerHTML = "You were born on " + daysOfTheWeek[d] + " and your Akan name is: " + maleNames[d];

function radioInfo() {
 var radio = document.getElementsByName('gender');
 for (var i = 0; i < radio.length; i++) {
  if (radio[i].checked == true) {
   // generate output with the checked radio

   gender = radio[i].value;
   // only one radio can be logically checked

   return gender;
  }
 }
}
