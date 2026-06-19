
const password = document.getElementById('pass')
const eye = document.getElementById('eye')
const upperLower = document.getElementById('upperLower')
const num = document.getElementById("num")
const sym = document.getElementById("sym")
const charac = document.getElementById("charac")
const instant = document.getElementById("instant")
const uDetected = document.getElementById("uDetected");
const nDetected = document.getElementById("nDetected");
const sDetected = document.getElementById("sDetected");
const cDetected = document.getElementById("cDetected");



eye.addEventListener('click', ()=>{
if (password.type === "password"){
password.type = "text"
eye.classList.remove("fa-eye")
        eye.classList.add("fa-eye-slash")
}else{
    password.type = "password"
    eye.classList.remove("fa-eye-slash")
        eye.classList.add("fa-eye")
}
})
// const value = password.value
// const upper =  /[A-Z]/.test(value)
// const lower =  /[a-z]/.test(value)

// if (upper && lower){
// upperLower.style.backgroundColor = "green"
// }else{

// }

// })

password.addEventListener("input", () => {
    const value = password.value

    const upper = /[A-Z]/.test(value)
    const lower = /[a-z]/.test(value)
    const number = /[0-9]/.test(value)
    const symbol = /[!@#$%^&|//*()_+=<>'";:?/.{}-]/.test(value)
    

    if (upper && lower) {
    upperLower.style.backgroundColor = "green";
    uDetected.innerText = "DETECTED";
} else {
    upperLower.style.backgroundColor = "";
    uDetected.innerText = "NOT DETECTED";
}
    if (number) {
    num.style.backgroundColor = "green";
    nDetected.innerText = "DETECTED";
} else {
    num.style.backgroundColor = "";
    nDetected.innerText = "NOT DETECTED";
}

    if (symbol) {
    sym.style.backgroundColor = "green";
    sDetected.innerText = "DETECTED";
} else {
    sym.style.backgroundColor = "";
    sDetected.innerText = "NOT DETECTED";
}

    if (value.length >= 14) {
    charac.style.backgroundColor = "green";
    cDetected.innerText = "DETECTED";
} else {
    charac.style.backgroundColor = "";
    cDetected.innerText = "NOT DETECTED";
}

let total = value.length
if (upper) {
        total += 3
        
}
if (lower) {
        total += 3
        
}
if (number) {
        total += 3
        
}
if (symbol) {
        total += 3
        
} 

let time;

if (total < 5) {
    time = "1 minute";
} else if (total < 8) {
    time = "1 hour";
} else if (total < 12) {
    time = "10 hours";
} else if (total < 15) {
    time = "3 days";
} else if (total < 18) {
    time = "1 month";
} else if (total < 22) {
    time = "3 years";
} else if (total < 25) {
    time = "10 years";
} else if (total < 30) {
    time = "1,000 years";
} else if (total < 35) {
    time = "100,000 years";
} else if (total < 40) {
    time = "10 million years";
} else if (total < 60) {
    time = "1 billion years";
} else {
    time = "Trillions of years";
}
instant.textContent= time
})



        
