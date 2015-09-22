var name = "Joey";
var age = 27;
var gender = "male";
var isMember = true;
var isThirsty = true;
var drink_name;

//If they are not a member or if they are under the age of 21
if (!isMember || age < 21) {
  if (gender === "male") {
    document.querySelector("#greeting").textContent = "Welcome sir, I apologize, however you are denied access to the club.";
  }
  else if (gender === "female") {
    document.querySelector("#greeting").textContent = "Welcome ma'am, I apologize, however you are denied access to the club.";
  }
  //address them as sir or ma'am as appropriate and apologetically deny them access to the club.
} else {
  if (gender === "male") {
    document.querySelector("#greeting").textContent = "Welcome Mr. " + name + "! Have a great day at the club.";
  }
  else if (gender === "female") {
    document.querySelector("#greeting").textContent = "Welcome Mrs. " + name + "! Have a great day at the club.";
  }
}
// if greet them as Mr.
//   and their name, and welcome them.
// else if or Mrs. (as appropriate by gender)
// and their name, and welcome them.
if (isThirsty) {
  drink_name = prompt("What drink would you like?");
}
// If they are thirsty
//   prompt them as to what drink they would like
//   store it in a variable.

if (drink_name && drink_name !== "Coors Light") {
  document.querySelector("#drink-order").textContent = "Yes " + name + "! One " + drink_name + " coming right up.";
}
// If their favorite drink is NOT "Coors Light"
//   tell them "yes" (name) "one" (drink_name) "coming right up!"
else if (drink_name === "Coors Light") {
  document.querySelector("#drink-order").textContent = "Your membership has been revoked. Please leave the club immediately.";
}
// Else if coors light
//   kick them out.
