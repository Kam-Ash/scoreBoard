let scoreHome = document.getElementById("home-score");
let scoreGuest = document.getElementById("guest-score")
let countHome = 0;
let countGuest = 0;
/*home*/

function onescoreHome(){
    countHome += 1;
    scoreHome.textContent = countHome;
}
function twoscoreHome(){
    countHome += 2;
    scoreHome.textContent = countHome;
}
function threescoreHome(){
    countHome += 3;
    scoreHome.textContent = countHome;
}
function resetscoreHome(){
    countHome = 0;
    scoreHome.textContent = countHome;
}
/*guest*/


function onescoreGuest(){
    countGuest += 1;
    scoreGuest.textContent = countGuest;
}
function twoscoreGuest(){
    countGuest += 1;
    scoreGuest.textContent = countGuest;
}
function threescoreGuest(){
    countGuest += 1;
    scoreGuest.textContent = countGuest;
}
function resetscoreGuest(){
    countGuest = 0;
    scoreGuest.textContent = countGuest;
}