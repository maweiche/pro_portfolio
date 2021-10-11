var name = document.getElementById("mainName");
var contactModal = document.getElementById("contactModal");

//Moment.js

setInterval(myTimer, 0);

function myTimer() {
    const d = new Date();
    document.getElementById("time").innerHTML= d.toLocaleTimeString();
}
