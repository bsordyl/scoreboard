let homePoints = document.getElementById("home-points")
let guestPoints = document.getElementById("guest-points")
let homeCount = 0
let guestCount = 0

function homeAddOne(){
    homeCount += 1
    homePoints.innerText = homeCount 
}

function homeAddTwo(){
    homeCount  += 2
    homePoints.innerText = homeCount  
}

function homeAddThree(){
    homeCount  += 3
    homePoints.innerText = homeCount  
}

function guestAddOne(){
    guestCount += 1
    guestPoints.innerText = guestCount
}

function guestAddTwo(){
    guestCount += 2
    guestPoints.innerText = guestCount 
}

function guestAddThree(){
    guestCount += 3
    guestPoints.innerText = guestCount
}

function newGame(){
    guestCount = 0
    guestPoints.innerText = guestCount
    homeCount = 0
    homePoints.innerText = homeCount
}

