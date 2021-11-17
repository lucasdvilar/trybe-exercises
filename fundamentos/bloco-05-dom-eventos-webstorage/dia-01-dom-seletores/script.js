document.getElementById("header-container").style.backgroundColor = "green";

document.querySelector(".emergency-tasks").style.backgroundColor = "orange";

document.querySelector(".no-emergency-tasks").style.backgroundColor = "yellow";

document.querySelectorAll(".emergency-tasks h3")[0].style.backgroundColor = "purple";

document.querySelectorAll(".emergency-tasks h3")[1].style.backgroundColor = "purple";

document.getElementById("footer-container").style.backgroundColor = "darkblue";

let noEmergency = document.querySelectorAll(".no-emergency-tasks h3");
for (let i = 0; i <= noEmergency.length; i += 1) {
    noEmergency[i].style.backgroundColor = "black";
};