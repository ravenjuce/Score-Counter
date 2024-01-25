let homeScore = 0
let guestScore = 0
document.getElementById("home-score").textContent=homeScore
document.getElementById("guest-score").textContent=guestScore


function getHome1() {
    homeScore += 1
    document.getElementById("home-score").textContent=homeScore
}
function getHome2() {
    homeScore += 2
    document.getElementById("home-score").textContent=homeScore
}
function getHome3() {
    homeScore += 3
    document.getElementById("home-score").textContent=homeScore
}

function getGuest1() {
    guestScore += 1
    document.getElementById("guest-score").textContent=guestScore
}
function getGuest2() {
    guestScore += 1
    document.getElementById("guest-score").textContent=guestScore
}
function getGuest3() {
    guestScore += 1
    document.getElementById("guest-score").textContent=guestScore
}
